import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutBio } from "../components/about/AboutBio";
import { AboutHero } from "../components/about/AboutHero";
import { SkillsGrid } from "../components/about/SkillsGrid";

export default function AboutPage() {
    return (
        <main className="space-y-24">
            <AboutHero />
            <div className="h-px bg-border mx-auto max-w-5xl"/>
            <AboutProfile />

            {/* <section className="container mx-auto px-4"> */}
            <AboutBio />
            {/* </section> */}
            <SkillsGrid /> 
        </main>
    )
}