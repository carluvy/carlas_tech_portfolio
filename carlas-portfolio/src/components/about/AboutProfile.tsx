export function AboutProfile() {
  return (
    <section className="py-16 flex justify-center space-y-8">
    {/* // <section className="container mx-auto px-4 py-24"> */}
    {/* <div className="container mx-auto px-4"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl px-4">
        
        {/* Profile Image */}
        <div className="relative mx-auto">
          {/* Gradient ring */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl bg-linear-to-br
                       from-primary/40 to-primary/10 blur-2xl"
          />

          {/* Image frame */}
          <div className="relative rounded-2xl border bg-card p-2 shadow-xl glow">
            <img
              src="/profile/profile.jpeg" // replace when ready
              alt="Carla Aluvai"
              className="h-90 w-90 object-cover rounded-2xl
                         transition-transform duration-500
                         hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Building with purpose.
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I care deeply about writing clean, maintainable code and designing
            interfaces that feel intuitive and reliable. I enjoy working across
            the stack and learning systems deeply rather than chasing trends.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Whether it’s a mobile app, backend service, or frontend experience,
            my goal is always the same: ship something thoughtful, usable, and
            built to last.
          </p>

          {/* Callouts */}
          <div className="
          grid 
          grid-cols-2 
          gap-4 pt-4
         ">
            <div className="
            rounded-2xl 
            border 
            bg-card 
            p-4
            transition-all
            hover:bg-(--card-hover)
            text-card-foreground
            duration-300
            dark:hover:bg-(--card-hover-dark)
            hover:translate-y-1
            glow
            ">
              <p className="text-sm text-muted-foreground leading-relaxed">Focus</p>
              <p className="font-semibold tracking-tight">User-first systems</p>
            </div>
            <div className="
            rounded-2xl 
            border 
            bg-card 
            p-4 
            transition-all
            hover:bg-(--card-hover)
            text-card-foreground
            duration-300
            dark:hover:bg-(--card-hover-dark)
            hover:translate-y-1
            glow">
              <p className="text-sm text-muted-foreground leading-relaxed">Style</p>
              <p className="font-semibold tracking-tight">Clean & scalable</p>
            </div>
          </div>
        </div>
        </div>
      {/* </div> */}
    </section>
  );
}
