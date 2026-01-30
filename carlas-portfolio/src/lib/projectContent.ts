import type { Project } from "@/types";
import fm from "front-matter"
const modules = import.meta.glob(
    "/src/content/projects/*.md",
    // { as: "raw" }
    {
        query: "?raw", 
        import: "default"
    }
)


export async function getAllProjects(): Promise<Project[]> {
//   const modules = import.meta.glob(
//     "/src/content/projects/*.md",
//     { query: "?raw", import: "default" }
//   )

  const projects = await Promise.all(
    Object.entries(modules).map(async([path, resolver]) => {
        const raw = await resolver() as string;

        if (typeof raw !== "string") {
            // console.log("not a string")
            throw new Error("Expected markdown string");
        } 
        const parsed = fm<{
        title: string
        summary: string
        tags?: string[]
        featured: boolean
        content: string
        thumbnail: string
        screenshots: string[]
        repo?: "private" | "public"
      }>(raw)
        // const { data, content } = matter(raw);
        // console.log("Data", parsed)

        const slug = path.split("/").pop()!.replace(".md", "");

          return {
            slug: slug,
            title: parsed.attributes.title,
            summary: parsed.attributes.summary,
            tags: parsed.attributes.tags ?? [],
            featured: parsed.attributes.featured,
            content: parsed.attributes.content,
            repo: parsed.attributes.repo,
            screenshots: parsed.attributes.screenshots ?? []


        } satisfies Project
    })
)

return projects;
}


/**
 * Load a single project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  const modules = import.meta.glob(
    "/src/content/projects/*.md",
    { query: "?raw", import: "default" }
  )

  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${slug}.md`)
  )

  if (!match) return null

  const raw = await match[1]() as string
  const parsed = fm<{
        title: string
        summary: string
        tags?: string[]
        featured: boolean
        content: string
        screenshots: string[]
        thumbnail: string
      }>(raw)
//   const { data, content } = matter(raw)

  return {
    slug,
    title: parsed.attributes.title,
    summary: parsed.attributes.summary,
    tags: parsed.attributes.tags ?? [],
    featured: parsed.attributes.featured,
    content: parsed.body,
    screenshots: parsed.attributes.screenshots,
    thumbnail: parsed.attributes.thumbnail
  }
}


export async function getProjectMarkdown(slug: string) : Promise<string | null> {
    const path = `/src/content/projects/${slug}.md`;
    const loader = modules[path];
    // console.log("pahts", path)

    if (!loader) return null;

    return (await loader()) as string;
    
}