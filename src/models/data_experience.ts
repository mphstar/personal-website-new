interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  descriptions: string[];
}

const data_experience: ExperienceItem[] = [
  {
    company: "PT OTAK KANAN",
    role: "Frontend Developer",
    date: "Agu 2024 - Des 2024",
    location: "Surabaya, Jawa Timur, Indonesia",
    descriptions: [
      "Owned end-to-end frontend development for applications.",
      "Implemented responsive and user-friendly interfaces."
    ]
  },
  {
    company: "PT. Inovasi Digital Sejahtera",
    role: "Frontend Developer",
    date: "Feb 2024 - Des 2024",
    location: "Surabaya, Jawa Timur, Indonesia",
    descriptions: [
      "Developed frontend website interfaces in accordance with UI designs provided via Figma."
    ]
  },
  {
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    role: "Cloud Computing Cohort",
    date: "Feb 2024 - Jul 2024",
    location: "Indonesia",
    descriptions: [
      "Built backend services integrated with provided machine learning models and handled application deployment using Google Cloud."
    ]
  },
  {
    company: "Vascomm",
    role: "Information Technology System Network Administrator",
    date: "Jan 2020 - Jun 2020",
    location: "Sidoarjo, Jawa Timur, Indonesia",
    descriptions: [
      "Explore self-hosted solutions for various needs: creating a personal cloud storage with NextCloud, virtualizing resources with Proxmox, facilitating online meetings via Jitsi Meet, managing video content with YouPhpTube, and crafting video tutorials on both NextCloud and OpenVPN."
    ]
  }
];

export default data_experience;
