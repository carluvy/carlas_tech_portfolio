import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return (
        <header className={`backdrop-blur
         sticky 
         top-0 
         z-50
           border-border
            glow 
            transition-all 
            duration-300 ${scrolled
              ? "bg-background/80 shadow-lg border-b"
              : "bg-transparent border-transparent"}
              `}>
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
              <ThemeToggle/>

              {/* Brand */}
              <Link to="/" className="flex items-baseline gap-2 group">
              <span className="text-xl font-bold gradient-text tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_12px_hsl(var(--primary))]">
                Carla Aluvai
                </span>
                <span className="text-sm text-muted-foreground opacity-70 group-hover:opacity-100 transition">
                  Portfolio
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex gap-6">
                <NavItem to="/about">About</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>
          {/* {[
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative transition
                 ${
                   isActive
                     ? "text-primary"
                     : "text-muted-foreground hover:text-foreground"
                 }`
              }
            >
              {label}

              {/* Active underline */}
              {/* <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full bg-primary transition
                  ${ isActive ? "opacity-100" : "opacity-0"}
                `}
              /> */}
            {/* </NavLink> */}
          {/* ))} */} 
          {/* <ThemeToggle /> */}
        </nav>
            {/* <Link to="/about" className="text-muted-foreground hover:text-primary transition">
            About
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition">
            Projects
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition">
            Contact
          </Link>
        </nav> */}
      </div>
            
        </header>
    )

    function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
      return (
        <NavLink
        to={to} className="group relative">
        {({ isActive }) => (
          <>
          <span
          className={`text-sm transition-colors
        ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
        `}
      >
        {children}
        </span>

        <span
        className={`absolute left-0 -bottom-1 h-0.5 w-full
      transition-transform origin-left duration-300
      ${isActive
        ? "scale-x-100 bg-primary"
        : "scale-x-0 bg-primary"}
        `}
        />
        </>
        )}
      </NavLink>
      );
    }
}