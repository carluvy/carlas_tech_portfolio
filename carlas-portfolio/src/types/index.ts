export interface Project {
    // id: string,
    slug: string,
    summary: string,
    title: string,
    tags: string[],
    featured?: boolean,
    thumbnail?: string,
    content: string,
    screenshots?: string[],
    repo?: "private" | "public"
}