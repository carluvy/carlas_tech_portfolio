import { Card, CardContent } from "../ui/card";

export function AboutBio() {
  return (
    <section className="py-16 flex justify-center">
    <div className="max-w-5xl px-4 grid gap-8 md:grid-cols-2">
      <Card className="transition-colors hover:bg-(--card-hover)">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">My Approach</h2>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy working across the stack, focusing on clean architecture,
            maintainable code, and thoughtful user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I value clarity, iteration, and solving real problems over adding
            unnecessary complexity.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">What I Care About</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
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