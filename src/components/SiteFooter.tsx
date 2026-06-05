import { Link } from "@tanstack/react-router";
import { SiteLogo } from "./SiteLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <SiteLogo className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              L'infrastructure digitale qui propulse le commerce local en Afrique Centrale. 
              Commandez, vendez et livrez sans friction.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Social placeholders */}
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">FB</div>
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">IG</div>
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">LN</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Plateforme</h4>
            <ul className="mt-6 space-y-4 text-base font-medium text-muted-foreground">
              <li><Link to="/solution" className="transition-colors hover:text-primary">Notre Solution</Link></li>
              <li><Link to="/partenaire" className="transition-colors hover:text-primary">Espace Commerçants</Link></li>
              <li><Link to="/partenaire" className="transition-colors hover:text-primary">Devenir Livreur</Link></li>
              <li><Link to="/" className="transition-colors hover:text-primary">Tarifs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Contact & Support</h4>
            <ul className="mt-6 space-y-4 text-base font-medium text-muted-foreground">
              <li>Brazzaville, République du Congo</li>
              <li>contact@golivra.app</li>
              <li>+242 06 781 14 62</li>
              <li><Link to="/" className="transition-colors hover:text-primary">Aide & FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border/50 pt-8 lg:mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GoLivra. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary">Conditions Générales</Link>
              <Link to="/" className="hover:text-primary">Confidentialité</Link>
              <Link to="/" className="hover:text-primary">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}