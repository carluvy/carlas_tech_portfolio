// import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { useEffect, useState } from "react";
import type { Project } from "@/types";
import { getAllProjects } from "@/lib/projectContent";
// const projects = [
//     {
//   "slug": "Frontend",
//   "title": "Dogs",
//   "summary": "Summary",
//   "tags": ["React", "Typescript"]
  
// },
//   {
//   "slug": "Backend",
//   "title": "Cats",
//   "summary": "Summary",
//   "tags": ["Python", "OAuth2", "Django"]
//   },
//     {
//   "slug": "Data",
//   "title": "Cows",
//   "summary": "Summary",
//   "tags": ["Python", "NumPy", "Pandas"]
//     }
// ]

export function ProjectsPreview() {
    const [ projects, setProjects ] = useState<Project[]>([])

    useEffect(() => {
        getAllProjects().then(setProjects);

    })
    return (
        <section className="space-y-10">
            <div className="flex items-end justify-between gap-4">
                <div className="space-y max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground">
                        A few projects I've built recently - focused on clarity, usability, and solid engineering.
                    </p>
                </div>

                <Link
                to="/projects"
                className="hidden sm:inline-flex items-center
                text-sm font-medium text-primary
                hover:underline underline-offset-4">
                    View all →

                </Link>
            </div> 

            <div className="grid gap-6 md:grid-cols-3">
                {projects.slice(0,4).map(project => (
                    <ProjectCard
                    // <Link
                    key={project.slug}
                    project={project}
                    // compact
                    />
                ))}
                    {/* // to={`/projects/${project.slug}`}
                    // className="
                    // group relative rounded-2xl border bg-card p-6
                    // transition-all duration-300
                    // hover:-translate-7-1 hover:shadow-lg"
                    // > */}
                        {/* Hover tint */}

{/* <div
aria-hidden
className="
absolute inset-0 -z-10 rounded-2xl
bg-primary/10 opacity-0 blur-2xl
transition group-hover:opacity-100"/>

<h3 className="text-lg font-semibold tracking-tight">
    {project.title}
</h3>

<p className="mt-2 text-sm text-muted-foreground line-clamp-3">
    {project.summary}
</p>

<div className="mt-4 flex flex-wrap gap-2">
    {project.tags.slice(0,3).map(tag => (
        <span
        key={tag}
        className="text-xs rounded-full border px-2 py-0.5">
            {tag}
        </span>
    ))}
</div>
                    </Link>
                ))}
            </div> */}

            {/* Mobile CTA */}
            <div className="sm:hidden pt-4">
                <Link
                to="/projects"
                className="text-sm font-medium text-primary">
                    View all projects →
                </Link>
            </div>
            </div>
        </section>
    )
}