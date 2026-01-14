import { AboutBio } from "../components/about/AboutBio";
import { AboutHero } from "../components/about/AboutHero";
import { SkillsGrid } from "../components/about/SkillsGrid";

export default function AboutPage() {
    return (
        <main className="container mx-auto max-w-5xl px-4 py-16 space-y-24">
            <AboutHero />
            <AboutBio />
            <SkillsGrid /> 
        </main>
    )
}