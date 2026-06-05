import { Link, useRouterState } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/solution", label: "Solution" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2 transition-transform active:scale-95">
          <SiteLogo className="h-10 w-auto transition-all group-hover:brightness-110" />
        </Link>
        
        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="mx-4 h-6 w-px bg-border/60" />
          
          <Link
            to="/partenaire"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-black text-background shadow-lg shadow-black/5 transition-all hover:scale-105 hover:bg-foreground/90 active:scale-95"
          >
            Devenir partenaire
          </Link>
        </div>
        
        {/* Mobile menu button (visual only for now) */}
        <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-secondary md:hidden">
          <div className="h-0.5 w-5 rounded-full bg-foreground" />
          <div className="h-0.5 w-5 rounded-full bg-foreground" />
          <div className="h-0.5 w-5 rounded-full bg-foreground" />
        </button>
      </nav>
    </header>
  );
}