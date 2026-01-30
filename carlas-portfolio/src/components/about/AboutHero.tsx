export function AboutHero() {
    return (
        <section className="relative py-20 flex justify-center">
            {/* Backgorund glow */}
            <div aria-hidden
            className="absolute inset-0 -z-10 flex justify-center">
                <div className="h-100 w-100 rounded-full bg-primary/20 blur-3xl"/>
            </div>
            {/* <div className="container mx-auto px-4"> */}
                <div className="max-w-5xl px-4 text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="gradient-text">About Me </span>
            </h1>

            <p className="text-xl leading-relaxed text-muted-foreground">
                I'm a{" "} 
                <span className="text-foreground font-medium">
                    software devoloper 
                    </span>{" "}
                    focused on building{" "} 
                    <span className="text-foreground font-medium">
                        reliable, user-centered applications
                        </span>{" "}
                         with modern web and mobile technologies.
                         </p>

                         <div className="flex justify-center gap-4 pt-4 flex-wrap">
                            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
                                Python

                            </span>
                            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
              Kotlin
            </span>
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
              Django
            </span>

                         </div>
            </div>
            {/* </div> */}

        </section>
    )
}