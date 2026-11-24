Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630

$background = [System.Drawing.ColorTranslator]::FromHtml("#111111")
$accent = [System.Drawing.ColorTranslator]::FromHtml("#10b981")
$titleColor = [System.Drawing.ColorTranslator]::FromHtml("#fafafa")
$nameColor = [System.Drawing.ColorTranslator]::FromHtml("#a1a1aa")
$roleColor = [System.Drawing.ColorTranslator]::FromHtml("#71717a")
$urlColor = [System.Drawing.ColorTranslator]::FromHtml("#52525b")

$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear($background)

$wordmarkFont = [System.Drawing.Font]::new("Segoe UI", [single]104, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$nameFont = [System.Drawing.Font]::new("Segoe UI", [single]38, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$roleFont = [System.Drawing.Font]::new("Segoe UI", [single]30, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$urlFont = [System.Drawing.Font]::new("Consolas", [single]24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$titleBrush = [System.Drawing.SolidBrush]::new($titleColor)
$nameBrush = [System.Drawing.SolidBrush]::new($nameColor)
$roleBrush = [System.Drawing.SolidBrush]::new($roleColor)
$urlBrush = [System.Drawing.SolidBrush]::new($urlColor)
$accentBrush = [System.Drawing.SolidBrush]::new($accent)

$left = [single]96

# Accent rule above the wordmark
$graphics.FillRectangle($accentBrush, $left, [single]150, [single]64, [single]6)

$graphics.DrawString("Mphstar.", $wordmarkFont, $titleBrush, $left, [single]182)
$graphics.DrawString("Bintang Malindo Eka Putra", $nameFont, $nameBrush, $left, [single]340)
$graphics.DrawString("Software Developer  /  Web & Mobile", $roleFont, $roleBrush, $left, [single]400)
$graphics.DrawString("mphstar.my.id", $urlFont, $urlBrush, $left, [single]506)

# Status dot next to the URL, matching the site's presence indicator
$graphics.FillEllipse($accentBrush, [single]($left + 186), [single]514, [single]10, [single]10)

$graphics.Dispose()

$out = Join-Path (Split-Path -Parent $PSScriptRoot) "public\og-image.png"
$bitmap.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()

$wordmarkFont.Dispose()
$nameFont.Dispose()
$roleFont.Dispose()
$urlFont.Dispose()
$titleBrush.Dispose()
$nameBrush.Dispose()
$roleBrush.Dispose()
$urlBrush.Dispose()
$accentBrush.Dispose()

$image = [System.Drawing.Image]::FromFile($out)
"og-image.png: $($image.Width)x$($image.Height) $([Math]::Round((Get-Item $out).Length / 1KB))KB"
$image.Dispose()
