
import "server-only";
import { z } from "zod";
import { projects } from "@/content/projects";

export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  technologies: z.array(z.string().min(1)),
  features: z.array(z.string().min(1)),
});

export type ValidatedProject = z.infer<typeof projectSchema>;

export function getProjects(): ValidatedProject[] {
  return z.array(projectSchema).parse(projects);
}

export function getProject(
  slug: string,
): ValidatedProject | undefined {
  const validatedProjects = getProjects();

  return validatedProjects.find(
    (project) => project.slug === slug,
  );
}

import { posts } from "@/content/posts";

export const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.array(z.string().min(1)),
  tags: z.array(z.string().min(1)),
});

export type ValidatedPost = z.infer<typeof postSchema>;

export function getPosts(): ValidatedPost[] {
  return z.array(postSchema).parse(posts);
}

export function getPost(
  slug: string
): ValidatedPost | undefined {
  return getPosts().find((post) => post.slug === slug);
}
