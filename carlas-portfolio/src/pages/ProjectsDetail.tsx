import { ProjectContent } from "@/components/projects/ProjectsContent";
import { getProject } from "@/lib/projectContent";
import { captionFromSrc } from "@/lib/utils";
import type { Project } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Section } from "@/components/ui/SectionWrapper"


export default function ProjectDetailPage() {
    const { slug } = useParams();
    // const project = projects.find(p => p.slug === slug);
    const [project, setProject] = useState<Project | null>(null)
    // const [markdown, setMarkdown] = useState<string | null>(null);
   

    

    useEffect(() => {
        if (!slug) return
        getProject(slug).then(setProject)
        // getProjectMarkdown(slug).then(setMarkdown);
        // console.log("Slug", slug);
        // fetch(`/src/content/projects/${slug}.md`).then((response) => response.text())
        // getProjectMarkdown(slug).then((response) => response.text())
        // .then((text) => {
        //     setMarkdown(text);
        // })
    }, [slug]);

    // console.log("Screenshots", project?.screenshots)


    if (!project) {
        return <div className="py=24 text-center">Project not found</div>
    }
     const { screenshots = [] } = project

    return (
        <main className="space-y-24">
            <Section>
            <section className="py-24 flex justify-center">
                <header className="space-y-6 max-w-3xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {project.summary}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2 pt-4">
                        {project.tags.map(tag => (
                            <li
                                key={tag}
                                className="
                                inline-flex
                                items-center
                                rounded-full 
                                border
                                px-3 py-1 
                                text-sm 
                                text-muted-foreground
                                transition
                                hover:border-primary hover:text-primary">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </header>
            </section>
            </Section>
            <div className="h-px bg-border max-w-5xl mx-auto" />

            <Section>


            <section className="flex justify-center">


                <article className="prose prose-neutral dark:prose-invert max-w-3xl">
                    <ProjectContent markdown={project.content} />
                </article>


                {/* {markdown && <ProjectContent markdown={markdown} />} */}

                {/* <ProjectContent markdown={""} /> */}
            </section>
            </Section>
            {/* <Section children={} */}
           
            <div className="h-px bg-border max-w-5xl mx-auto" />

            <Section>


            {screenshots.length > 0 && (

                <section className="flex justify-center">
                    <div className="max-w-5xl w-full space-y-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-center">
                        Screenshots
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {project.screenshots?.map(src => (

                            <figure
                                key={src}
                                className="rounded-xl border bg-card overflow-hidden"
                            >
                    
                                    <img
                                        src={src}
                                        alt={captionFromSrc(src)}
                                        className="w-full h-auto"
                                        loading="lazy"

                                    />
                                    <figcaption
                                        className="px-4 py-2 text-sm text-muted-foreground border-t">
                                        {captionFromSrc(src)}
                                    </figcaption>
                                </figure>

                        ))}
                    </div>
                    </div>

                </section>
            )}
            </Section>


        </main>
    )
}