import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
type Props = {
    markdown: string
}


export function ProjectContent({ markdown }: Props) {
    return (
        <section className="flex justify-center">
            <article className="prose prose-neutral dark:prose-invert max-w-3xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                    </ReactMarkdown>
                {/* <h1> {projects.map(project => (
                                    <ProjectCard key={project.summary} project={project} />
                                ))}</h1>
                <h2> The Problem</h2> */}
            </article>
        </section>
    )
}