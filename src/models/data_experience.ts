interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  descriptions: string[];
}

const data_experience: ExperienceItem[] = [
  {
    company: "Ramah Community",
    role: "Founder & Owner",
    date: "Sep 2025 - Present",
    location: "Roblox Platform",
    descriptions: [
      "Founded and led a thriving Roblox game development community focused on creating immersive exploration, obby, and hangout experiences.",
      "Designed and developed engaging in-game features, mechanics, and interactive map environments within Roblox Studio.",
      "Managed and grew a vibrant community across Roblox and Discord, fostering collaboration and player engagement.",
      "Oversaw content strategy, community moderation, and creative direction to maintain a welcoming and active player base.",
      "Achieved a significant milestone of 975k+ total visits, showcasing the popularity and reach of the developed games."
    ]
  },
  {
    company: "Ferbains",
    role: "Fullstack Developer",
    date: "May 2025 - Present",
    location: "Indonesia",
    descriptions: [
      "Architected and developed responsive frontend interfaces while seamlessly integrating them with robust backend services.",
      "Managed end-to-end deployment pipelines, ensuring smooth releases to production servers.",
      "Designed and optimized database schemas to support scalable and efficient data management.",
      "Collaborated across teams to deliver high-quality, production-ready web applications."
    ]
  },

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
