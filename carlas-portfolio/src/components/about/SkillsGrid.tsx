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
    <section className="relative justify-center py-16 space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
        Skills & Tools </h2>
      {/* <h2 className="text-2xl font-semibold">Skills & Tools</h2> */}

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="
          group relative
          border
          bg-card 
          p-6 
          rounded-2xl
          transition-all
          duration-300
          hover:translate-y-1
          hover:shadow-lg
          glow
          ">

            {/* subtle glow */}
            {/* <div
              aria-hidden
              className="
                absolute inset-0 -z-10 rounded-2xl
                bg-primary/10 opacity-0 blur-2xl
                transition group-hover:opacity-100
              "
            /> */}

            <h3 className="font-semibold mb-3 text-lg tracking-tight ">{category}</h3>
            <div className="flex flex-wrap gap-2 ">
              {items.map(skill => (
                <Badge key={skill} variant="secondary"
                className="
                bg-card
                text-muted-foreground
                leading-relaxed 
                space-y-4
                hover:bg-primary/20
                transition">
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
