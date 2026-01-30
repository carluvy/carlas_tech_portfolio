import { ProjectCard } from "../about/ProjectCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/projectContent";
import type { Project } from "@/types";



export function ProjectsGrid() {
    // const { projects, setProjects } = useProjects();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    // const {projects} = useProjects();

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                getAllProjects().then(setProjects);


            } catch (err) {
                console.error("Error loading projects");
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, [])
    if (loading) return <p className="text-xs text-gray-500">Loading...</p>
    return (
        <section className="pb-24 flex justify-center">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4">
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>


    )
}