import { Badge } from "../ui/badge"

const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Jetpack Compose"],
  Backend: ["Django", "REST APIs", "JWT Auth"],
  Mobile: ["Android (Kotlin)", "Room", "Paging 3"],
  Tools: ["Git", "Docker", "Supabase", "Vite"],
  Data: ["Exploratory Data Analysis"]
}

export function SkillsGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Skills & Tools</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-card p-6 rounded-xl glow hover:translate-y-0.5 transition">
            <h3 className="font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
