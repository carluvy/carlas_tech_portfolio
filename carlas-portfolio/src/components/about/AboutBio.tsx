import { Card, CardContent } from "../ui/card";

export function AboutBio() {
  return (
    <section className="py-16 flex justify-center space-y-8">
    <div className="max-w-5xl px-4 grid gap-8 md:grid-cols-2">
      <Card className="
      transition-all 
      hover:bg-(--card-hover) 
      text-card-foreground 
      duration-300
      dark:hover:bg-(--card-hover-dark)
      hover:-translate-y-1
      hover:shadow-lg
      ">
        <CardContent className="p-6 space-y-4 glow rounded-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">My Approach</h2>
          <p className="text-muted-foreground leading-relaxed space-y-4">
            I enjoy working across the stack, focusing on clean architecture,
            maintainable code, and thoughtful user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed space-y-4">
            I value clarity, iteration, and solving real problems over adding
            unnecessary complexity.
          </p>
        </CardContent>
      </Card>

      <Card className="
      transition-all 
      hover:bg-(--card-hover) 
      text-card-foreground 
      duration-300
      dark:hover:bg-(--card-hover-dark)
      hover:-translate-y-1
      hover:shadow-lg">
        <CardContent className="p-6 space-y-4 glow rounded-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">What I Care About</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-4">
            <li>Readable and maintainable code</li>
            <li>Clear data flow and state management</li>
            <li>Performance and accessibility</li>
            <li>Learning and improving continuously</li>
          </ul>
        </CardContent>
      </Card>
      </div>
    </section>
  )
}