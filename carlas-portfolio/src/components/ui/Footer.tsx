export function Footer() {
  return (
    <footer className="bg-card mt-24 py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground space-y-4">
        <p className="text-sm text-muted-foreground">
          Building thoughtful software with modern tools.
        </p>
       
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://github.com/username" target="_blank" className="hover:text-primary transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-primary transition">
            LinkedIn
          </a>
          <a href="mailto:email@example.com" className="hover:text-primary transition">
            Email
          </a>
        </div>
         <p>&copy; {new Date().getFullYear()} Carla Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}