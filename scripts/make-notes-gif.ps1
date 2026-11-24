Add-Type -AssemblyName System.Drawing

$CanvasSize = 128
$FrameCount = 20
$DelayCs = 7

function New-RoundedPath([single]$x, [single]$y, [single]$boxWidth, [single]$boxHeight, [single]$radius) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  if ($boxWidth -le 0 -or $boxHeight -le 0) { return $path }
  $d = [single]($radius * 2)
  if ($d -gt $boxWidth) { $d = $boxWidth }
  if ($d -gt $boxHeight) { $d = $boxHeight }
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $boxWidth - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $boxWidth - $d, $y + $boxHeight - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $boxHeight - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-PropertyItem {
  $ctor = [System.Drawing.Imaging.PropertyItem].GetConstructor(
    [System.Reflection.BindingFlags]'Instance,NonPublic', $null, [Type[]]@(), $null)
  return $ctor.Invoke(@())
}

function Add-Prop($bmp, [int]$id, [int]$type, [byte[]]$value) {
  $item = New-PropertyItem
  $item.Id = $id
  $item.Type = $type
  $item.Len = $value.Length
  $item.Value = $value
  $bmp.SetPropertyItem($item)
}

function Get-Progress([int]$frame, [int]$start, [int]$length) {
  $t = ($frame - $start + 1) / $length
  if ($t -le 0) { return [single]0 }
  if ($t -ge 1) { return [single]1 }
  return [single][Math]::Pow($t, 0.75)
}

function Build-Frames([string]$background, [string]$cardStroke, [string]$barFill, [string]$accentFill) {
  $backgroundColor = [System.Drawing.ColorTranslator]::FromHtml($background)
  $cardPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml($cardStroke), [single]2)
  $barBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($barFill))
  $accentBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($accentFill))

  $bars = @(
    @{ top = [single]56; full = [single]76; start = 2 },
    @{ top = [single]70; full = [single]62; start = 7 },
    @{ top = [single]84; full = [single]42; start = 12 }
  )

  $frames = [System.Collections.ArrayList]::new()

  for ($frame = 0; $frame -lt $FrameCount; $frame++) {
    $bitmap = [System.Drawing.Bitmap]::new($CanvasSize, $CanvasSize)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.Clear($backgroundColor)

    $cardPath = New-RoundedPath 14 26 100 76 10
    $graphics.DrawPath($cardPen, $cardPath)
    $cardPath.Dispose()

    $graphics.FillRectangle($accentBrush, [single]26, [single]40, [single]20, [single]4)

    $activeWidth = [single]0
    $activeTop = [single]0
    $activeStart = -1

    foreach ($bar in $bars) {
      $progress = Get-Progress $frame $bar.start 5
      $barWidth = [single][Math]::Round($bar.full * $progress)
      if ($barWidth -gt 0) {
        $barPath = New-RoundedPath 26 $bar.top $barWidth 4 2
        $graphics.FillPath($barBrush, $barPath)
        $barPath.Dispose()
      }
      if ($progress -gt 0) {
        $activeWidth = $barWidth
        $activeTop = $bar.top
        $activeStart = $bar.start
      }
    }

    $caretVisible = $false
    if ($activeStart -ge 0) {
      if ($frame -lt 17) { $caretVisible = $true }
      else { $caretVisible = ((($frame - 17) % 4) -lt 2) }
    }

    if ($caretVisible -and $activeWidth -gt 0) {
      $caretX = [single](26 + $activeWidth + 4)
      if ($caretX -lt 104) {
        $caretPath = New-RoundedPath $caretX ($activeTop - 2) 2 8 1
        $graphics.FillPath($accentBrush, $caretPath)
        $caretPath.Dispose()
      }
    }

    $graphics.Dispose()
    Add-Prop $bitmap 0x5100 4 ([BitConverter]::GetBytes([int]$DelayCs))
    [void]$frames.Add($bitmap)
  }

  $cardPen.Dispose()
  $barBrush.Dispose()
  $accentBrush.Dispose()
  return $frames
}

function Save-Gif($frames, [string]$path) {
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/gif' }
  $encoder = [System.Drawing.Imaging.Encoder]::SaveFlag

  Add-Prop $frames[0] 0x5106 3 ([byte[]](0, 0))

  $params = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $params.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    $encoder, [int][System.Drawing.Imaging.EncoderValue]::MultiFrame)

  $frames[0].Save($path, $codec, $params)

  for ($i = 1; $i -lt $frames.Count; $i++) {
    $params.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
      $encoder, [int][System.Drawing.Imaging.EncoderValue]::FrameDimensionTime)
    $frames[0].SaveAdd($frames[$i], $params)
  }

  $params.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    $encoder, [int][System.Drawing.Imaging.EncoderValue]::Flush)
  $frames[0].SaveAdd($params)
}

$out = Join-Path (Split-Path -Parent $PSScriptRoot) "public\assets"

$lightFrames = Build-Frames "#fcfcfc" "#e4e4e7" "#c4c4cc" "#10b981"
Save-Gif $lightFrames "$out\notes-wip-light.gif"
$lightFrames | ForEach-Object { $_.Dispose() }

$darkFrames = Build-Frames "#111111" "#2f2f34" "#4d4d55" "#10b981"
Save-Gif $darkFrames "$out\notes-wip-dark.gif"
$darkFrames | ForEach-Object { $_.Dispose() }

Get-ChildItem "$out\notes-wip-*.gif" | Select-Object Name, Length
