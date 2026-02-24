export function Footer() {
  return (
    <footer className="bg-card mt-24 py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground space-y-4">
        <p className="text-sm text-muted-foreground">
          Building thoughtful software with modern tools.
        </p>
       
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://github.com/carluvy" target="_blank" className="hover:text-primary transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/carla-aluvai/" target="_blank" className="hover:text-primary transition">
            LinkedIn
          </a>
          <a href="aluvaicarla@gmail.com" className="hover:text-primary transition">
            Email
          </a>
        </div>
         <p>&copy; {new Date().getFullYear()} Carla Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}