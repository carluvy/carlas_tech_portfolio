import type { Project } from "@/types"
import { Link } from "react-router-dom"

type Props = {
  project: Pick<Project, "slug" | "title" | "summary" | "tags">
}

export function ProjectCard({project}: Props) {
    return (
        <Link
        to={`/projects/${project.slug}`}
        className="
        group relative rounded-2xl border bg-card
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl">

            <div
            aria-hidden
            className="
            absolute inset-0 -z-10 rounded-2xl
            bg-primary/10 opacity-0 blur-2xl
            transition group-hover:opacity-100"/>

            <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                </h3>

                <p className="
                mt-2 text-sm text-muted-foreground leading-relaxed
            "
            >
                {project.summary}
                {project.tags}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                    <span
                    key={tag}
                    className="
                    rounded-full border px-2 py-0.5 text-xs
                    text-muted-foreground">
                        {tag}
                    </span>
                ))}
            </div>
            </div>

        </Link>
    )
}