
export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "farmer-market",
    title: "Farmer-to-Consumer Direct Market",
    description:
      "A web application that helps farmers connect directly with consumers.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS"],
    features: [
      "Farmer product listings",
      "Product browsing",
      "Direct farmer-to-consumer marketplace",
    ],
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio and Blog",
    description:
      "A personal website showcasing projects, technical skills, and blog articles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive portfolio",
      "Dynamic project pages",
      "Searchable blog",
    ],
  },
];
