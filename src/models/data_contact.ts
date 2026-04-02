export interface ContactItem {
  platform: string;
  value: string;
  link: string;
}

const data_contact: ContactItem[] = [
  {
    platform: "Email",
    value: "Bintang.simdig20@gmail.com",
    link: "mailto:Bintang.simdig20@gmail.com"
  },
  {
    platform: "Github",
    value: "github.com/mphstar",
    link: "https://github.com/mphstar"
  },
  {
    platform: "Facebook",
    value: "Bintang",
    link: "https://facebook.com/bintang"
  },
  {
    platform: "Instagram",
    value: "@mphstar._",
    link: "https://instagram.com/mphstar._"
  },
  {
    platform: "LinkedIn",
    value: "linkedin.com/in/mphstar",
    link: "https://linkedin.com/in/mphstar"
  },
  {
    platform: "Youtube",
    value: "@Mphstar_",
    link: "https://youtube.com/@Mphstar_"
  }
];

export default data_contact;
