import { Link, useRouterState } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, MapPin, Mail } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/solution", label: "Solution" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary/80 active:scale-90 lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu
            size={22}
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            size={22}
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </button>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-x-0 top-20 bottom-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto bg-background shadow-2xl shadow-black/10 ring-1 ring-border/50 transition-all duration-300 ease-out lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 p-6">
          <ul className="flex flex-col gap-2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-black transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.label}
                    <ArrowRight
                      size={18}
                      className={`transition-transform group-hover:translate-x-1 ${
                        active ? "opacity-100" : "opacity-40"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/partenaire"
            className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-foreground px-5 py-4 text-lg font-black text-background shadow-lg transition-all hover:scale-[1.02] active:scale-95"
          >
            Devenir partenaire
            <ArrowRight size={20} />
          </Link>

          <div className="mt-6 flex flex-col gap-1 border-t border-border/60 pt-5">
            <a
              href="tel:+242067811462"
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone size={15} />
              </span>
              +242 06 781 14 62
            </a>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin size={15} />
              </span>
              Brazzaville, République du Congo
            </div>
            <a
              href="mailto:kimjaver7@gmail.com"
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail size={15} />
              </span>
              Nous écrire
            </a>
          </div>

          <p className="mt-4 text-center text-xs font-black uppercase tracking-[0.25em] text-muted-foreground/60">
            GoLivra © 2026
          </p>
        </div>
      </div>
    </header>
  );
}
