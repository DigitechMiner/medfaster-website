// Team members. The CMS (Content → Team) replaces this list once seeded.
export const TEAM: {
  name: string;
  role: string;
  category: "board" | "dev" | "marketing";
  image: string | null;
  showOnAbout: boolean;
}[] = [
  { name: "Kewal Mangukia", role: "Founder & CEO", category: "board", image: "/images/team/kewal.webp", showOnAbout: true },
  { name: "Rutvij Patel", role: "CTO & Director", category: "board", image: "/images/team/rutvij.webp", showOnAbout: true },
  { name: "Yash Prajapati", role: "BDE", category: "marketing", image: null, showOnAbout: false },
  { name: "Kevin Parmar", role: "Lead Fullstack Developer", category: "dev", image: "/images/team/kevin.webp", showOnAbout: false },
  { name: "Vaibhav Rawal", role: "Lead AI Module Developer", category: "dev", image: "/images/team/vaibhav.webp", showOnAbout: false },
  { name: "Deep Desai", role: "Lead Backend Developer", category: "dev", image: null, showOnAbout: false },
  { name: "Sanket Patel", role: "Mobile App Developer", category: "dev", image: null, showOnAbout: false },
  { name: "Rahul Nishad", role: "Web Developer", category: "dev", image: null, showOnAbout: false },
  { name: "Srujan K", role: "Backend Developer", category: "dev", image: "/images/team/srujan.webp", showOnAbout: false },
  { name: "Hariprasad Thorve", role: "AI Module Developer", category: "dev", image: null, showOnAbout: false },
];
