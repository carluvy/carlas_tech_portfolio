import { ProjectsGrid } from "@/components/projects/ProjectsGrid"
import { ProjectsHero } from "@/components/projects/ProjectsHero"


export default function ProjectsPage() {
  // const [ projects, setProjects ] = useState<Project[]>([]);

    function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      {children}
    </section>
  )
}

// useEffect(() => {
//   getAllProjects().then(setProjects);
// }, []);

    return (
        <main className="space-y-24">
            <Section>
            <ProjectsHero />
            {/* <div className="h-px bg-border mx-auto max-w-5xl"/> */}
            </Section>
              <div className="h-px bg-border mx-auto max-w-5xl"/>
            <Section>
            <ProjectsGrid />
            </Section>
            

            
        </main>
    )
}