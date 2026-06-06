import { Link } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";
import { StoreBadges } from "./StoreBadges";
import { Facebook, Instagram, Linkedin, Phone, MapPin } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className ?? ""} fill-current`} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.18a8.16 8.16 0 0 0 4.77 1.52V6.32a4.85 4.85 0 0 1-1.84-.63Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 rounded-[2.5rem] bg-foreground p-8 text-white shadow-2xl shadow-black/5 lg:mb-24 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">
                Téléchargez GoLivra
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/60 md:text-lg">
                L'application mobile pour commander, vendre et livrer à Brazzaville.
              </p>
            </div>
            <StoreBadges variant="outline" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <SiteLogo className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              L'infrastructure digitale qui propulse le commerce local en Afrique Centrale.
              Commandez, vendez et livrez sans friction.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com/golivra"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/golivra"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@golivra.cg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez GoLivra sur TikTok"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <TikTokIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://linkedin.com/company/golivra"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
              Plateforme
            </h4>
            <ul className="mt-6 space-y-4 text-base font-medium text-muted-foreground">
              <li>
                <Link to="/solution" className="transition-colors hover:text-primary">
                  Notre Solution
                </Link>
              </li>
              <li>
                <Link to="/clients" className="transition-colors hover:text-primary">
                  Espace Clients
                </Link>
              </li>
              <li>
                <Link to="/commercants" className="transition-colors hover:text-primary">
                  Espace Commerçants
                </Link>
              </li>
              <li>
                <Link to="/logistique" className="transition-colors hover:text-primary">
                  Espace Logistique
                </Link>
              </li>
              <li>
                <Link
                  to="/partenaire"
                  className="transition-colors hover:text-primary font-bold text-foreground"
                >
                  Devenir Partenaire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
              Contact & Support
            </h4>
            <ul className="mt-6 space-y-4 text-base font-medium text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                Brazzaville, République du Congo
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                +242 06 781 14 62
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 lg:mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GoLivra. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                Conditions Générales
              </Link>
              <Link to="/" className="hover:text-primary">
                Confidentialité
              </Link>
              <Link to="/" className="hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
