
import { describe, expect, it } from "vitest";
import {
  getProject,
  getPost,
  projectSchema,
} from "../lib/content";

describe("content helpers", () => {
  it("finds the Farmer Market project by slug", () => {
    const project = getProject("farmer-market");

    expect(project).toBeDefined();
    expect(project?.title).toBe("Farmer-to-Consumer Direct Market");
  });

  it("returns undefined for an unknown project slug", () => {
    expect(getProject("unknown-project")).toBeUndefined();
  });

  it("finds a blog post by slug", () => {
    const post = getPost("nextjs-routing");

    expect(post).toBeDefined();
    expect(post?.title).toBe("Understanding Next.js Routing");
  });
    it("rejects a project with a missing title", () => {
    const invalidProject = {
      slug: "test-project",
      title: "",
      description: "A test project",
      technologies: ["TypeScript"],
      features: ["Testing"],
    };

    expect(() => projectSchema.parse(invalidProject)).toThrow();
  });
});
