
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "nextjs-routing",
    title: "Understanding Next.js Routing",
    excerpt: "Learn how folders and files define routes in Next.js.",
    content: [
      "The App Router uses the app directory to organise pages in Next.js.",
      "Dynamic segments such as [slug] allow one page to handle multiple URLs."
    ],
    tags: ["Next.js", "Routing"]
  },
  {
    slug: "typescript-basics",
    title: "TypeScript Basics for Developers",
    excerpt: "Understand types, interfaces, and safer application code.",
    content: [
      "TypeScript adds static type checking to JavaScript.",
      "Types help developers catch mistakes before running their applications."
    ],
    tags: ["TypeScript", "Programming"]
  },
  {
    slug: "react-server-components",
    title: "React Server Components",
    excerpt: "Explore server-first rendering in modern React applications.",
    content: [
      "Server Components render on the server by default in the Next.js App Router.",
      "Client Components are useful when you need browser APIs or interactive state."
    ],
    tags: ["React", "Next.js"]
  }
];
