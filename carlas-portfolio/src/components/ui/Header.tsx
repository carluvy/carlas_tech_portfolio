import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="backdrop-blur bg-background/75 sticky top-0 z-50 border-b border-border glow">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">

              {/* Brand */}
              <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold gradient-text tracking-tight">
                Carla Aluvai
                </span>
                <span className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition">
                  Portfolio
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-sm">
          {[
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
            </NavLink>
          ))}
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
}