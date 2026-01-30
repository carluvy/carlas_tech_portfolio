import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutBio } from "../components/about/AboutBio";
import { AboutHero } from "../components/about/AboutHero";
import { SkillsGrid } from "../components/about/SkillsGrid";
import { ProjectsPreview } from "@/components/about/ProjectsPreview";
import { Section } from "@/components/ui/SectionWrapper";

export default function AboutPage() {

//     function Section({ children }: { children: React.ReactNode }) {
//   return (
//     <section className="mx-auto max-w-6xl px-4">
//       {children}
//     </section>
//   )
// }
    return (
        <main className="space-y-24">
            <Section>
            <AboutHero />
            {/* <div className="h-px bg-border mx-auto max-w-5xl"/> */}
            </Section>
              <div className="h-px bg-border mx-auto max-w-5xl"/>
            <Section>
            <AboutProfile />
            </Section>

            {/* <section className="container mx-auto px-4"> */}
            <Section>
            <AboutBio />
            </Section>
            {/* </section> */}
            <Section>
                <div className="h-px bg-border mx-auto max-w-5xl" />

            <SkillsGrid /> 
            </Section>
            <Section>
                <div className="h-px bg-border mx-auto max-w-5xl"/>
                <ProjectsPreview />
            </Section>
        </main>
    )
}