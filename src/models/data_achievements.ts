export type AchievementItem = {
  profile: string;
  tanggal: string;
  judul: string;
  penerbit: string;
  keahlian: string[];
  foto: string[];
};

const achievements: AchievementItem[] = [
  {
    profile: "/assets/foto.jpg",
    tanggal: "Juni 2025 - Juni 2027",
    judul: "Uji Kompetensi Pengembang Web",
    penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
    keahlian: ["Front-End Development", "Back-End Development"],
    foto: ["/assets/sertif/ujikom.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "Desember 2024",
    judul: "Sertifikat Magang Front-End Developer di PT. Otak Kanan",
    penerbit: "PT. Otak Kanan",
    keahlian: ["Front-End Development"],
    foto: ["/assets/sertif/magang.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "Juni 2024",
    judul: "Finalis Hackton SDGs UM 2024 National Competition Kategori Sosial Impact",
    penerbit: "Universitas Negeri Malang",
    keahlian: ["Front-End Development", "Back-End Development"],
    foto: ["/assets/sertif/finalis_hackton.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Membuat Front-End Web untuk Pemula",
    penerbit: "Dicoding Indonesia",
    keahlian: ["Front-End Development"],
    foto: ["/assets/sertif/sertif_frontend_pemula.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Dasar Pemrograman JavaScript",
    penerbit: "Dicoding Indonesia",
    keahlian: ["Pemrograman Dasar"],
    foto: ["/assets/sertif/belajar_dasar_pemrograman_javascript.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Dasar Pemrograman Web",
    penerbit: "Dicoding Indonesia",
    keahlian: ["HTML Dasar"],
    foto: ["/assets/sertif/belajar_dasar_pemrograman_web.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "January 2024 - January 2026",
    judul: "Alibaba Cloud Certified Developers",
    penerbit: "Alibaba Cloud",
    keahlian: ["Front-End Development", "Back-End Development"],
    foto: ["/assets/sertif/alibaba.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "October 2023",
    judul: "Certificate of Completion 2023 World Friends Korea IT Volunteer Program",
    penerbit: "NIA (National Information Society Agency)",
    keahlian: [
      "Front-End Development",
      "Back-End Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/knu.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "August 2023",
    judul:
      "Finalis Kompetisi Mahasiswa Bidang Informatika Politeknik Nasional V Kategori E-Government",
    penerbit: "Politeknik Elektronika Negeri Surabaya",
    keahlian: [
      "Leader Team",
      "Front-End Development",
      "Back-End Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/ehealth.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "November 2022 - November 2025",
    judul: "Junior Mobile Programmer",
    penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
    keahlian: ["Mobile Application Development", "Flutter"],
    foto: ["/assets/sertif/junior_mobile.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "June 2022",
    judul: "Juara 1 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Genap 2021/2022",
    penerbit: "Politeknik Negeri Jember",
    keahlian: ["Desktop Application Development", "Database Administration"],
    foto: ["/assets/sertif/gandrung1.webp", "/assets/sertif/gandrung2.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "January 2022",
    judul: "Juara 2 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Ganjil 2021/2022",
    penerbit: "Politeknik Negeri Jember",
    keahlian: [
      "Leader Team",
      "Desktop Application Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/tokosa.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "June 2021",
    judul:
      "Peserta IT Network System Administration Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Timur",
    penerbit: "Dinas Pendidikan Provinsi Jawa Timur",
    keahlian: ["Server Administration", "Network Administration"],
    foto: ["/assets/sertif/lksprov.webp"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "November 2020",
    judul: "Juara 3 Lomba IT (Jaringan) Tingkat SMK Se-Jawa Timur",
    penerbit: "Politeknik Negeri Jember",
    keahlian: ["Server Administration", "Network Administration"],
    foto: ["/assets/sertif/lombait.webp"],
  },
];

export default achievements;
