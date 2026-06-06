import { Link, useRouterState } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";
import { StoreBadges } from "./StoreBadges";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/solution", label: "Solution" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2 transition-transform active:scale-95">
          <SiteLogo className="h-10 w-auto transition-all group-hover:brightness-110" />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground lg:hidden transition-transform active:scale-90"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-background transition-all duration-500 lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-6 pb-32 overflow-y-auto">
          <ul className="space-y-4">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`flex items-center justify-between rounded-2xl p-5 text-xl font-black transition-all ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.label}
                    <ArrowRight size={20} className={active ? "opacity-100" : "opacity-30"} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-8 border-t border-border">
            <Link
              to="/partenaire"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-foreground p-6 text-xl font-black text-background shadow-xl transition-all active:scale-95"
            >
              Devenir partenaire
              <ArrowRight size={22} />
            </Link>
          </div>

          <div className="mt-auto pt-12">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
              Téléchargez l'application
            </p>
            <div className="mt-5">
              <StoreBadges variant="solid" size="sm" />
            </div>
            <p className="mt-10 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
              GoLivra — Brazzaville
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
