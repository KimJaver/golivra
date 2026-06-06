import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShoppingBag,
  Store,
  Bike,
  Users,
  Package,
  Truck,
  CreditCard,
  ShieldCheck,
  Search,
  ClipboardList,
  BarChart3,
  MapPin,
  Check,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-brazzaville.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import vendorImg from "@/assets/vendor.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import deliveryImg from "@/assets/delivery.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { StoreBadges } from "@/components/StoreBadges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoLivra — La plateforme de commerce et livraison n°1 au Congo" },
      {
        name: "description",
        content:
          "GoLivra connecte commerçants, restaurants et clients à Brazzaville. Commandez en ligne, vendez vos produits et gérez vos livraisons sur une seule plateforme sécurisée.",
      },
      {
        name: "keywords",
        content:
          "GoLivra, livraison Brazzaville, commander nourriture Congo, marketplace Congo, vente en ligne Brazzaville",
      },
      {
        property: "og:title",
        content: "GoLivra — La plateforme de commerce et livraison n°1 au Congo",
      },
      {
        property: "og:description",
        content: "Digitalisez votre commerce et simplifiez vos livraisons à Brazzaville.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden py-20 lg:py-32">
        <img
          src={heroImg}
          alt="Commerce local connecté à Brazzaville"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/10">
              <MapPin className="h-4 w-4 text-accent animate-pulse" />
              L'infrastructure du commerce au Congo
            </span>
            <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
              Commandez, vendez
              <br />
              <span className="relative">
                <span className="relative z-10">et livrez</span>
                <span className="absolute bottom-2 left-0 -z-10 h-4 w-full bg-primary/40 sm:h-6"></span>
              </span>{" "}
              depuis
              <br />
              <span className="bg-gradient-to-r from-accent to-brand-orange bg-clip-text text-transparent">
                une seule plateforme.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
              GoLivra réunit commerces, clients et transporteurs sur une plateforme unique pour
              transformer l'économie locale.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/solution"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
              >
                Découvrir la solution
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/partenaire"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15 active:scale-95"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ÉCOSYSTÈME */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <Eyebrow>L'écosystème GoLivra</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Une plateforme, trois révolutions.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Nous avons repensé chaque étape du commerce pour créer une expérience fluide et
              rentable pour tous les acteurs.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Clients",
                color: "bg-blue-500/10 text-blue-500",
                text: "Une marketplace intuitive pour découvrir le meilleur de votre ville et commander en un clic.",
                to: "/clients",
              },
              {
                icon: Store,
                title: "Commerçants",
                color: "bg-primary/10 text-primary",
                text: "Des outils puissants pour digitaliser votre stock, gérer vos ventes et booster votre visibilité.",
                to: "/commercants",
              },
              {
                icon: Truck,
                title: "Logistique",
                color: "bg-accent/10 text-accent",
                text: "Un réseau interconnecté pour optimiser chaque livraison et garantir une satisfaction totale.",
                to: "/logistique",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative rounded-[2.5rem] border border-border bg-card p-10 transition-all hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${f.color}`}
                >
                  <f.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-2xl font-black">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.text}</p>
                <Link
                  to={f.to}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary transition-all hover:gap-3"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA FONCTIONNE (Visual Steps) */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Fluidité opérationnelle</Eyebrow>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Du clic à la porte,
                <br />
                en un temps record.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                GoLivra automatise la mise en relation entre commerçants, clients et livreurs pour
                supprimer les frictions du commerce traditionnel.
              </p>

              <div className="mt-12 space-y-8">
                {[
                  {
                    t: "Publication",
                    d: "Les commerçants listent leurs produits en quelques secondes.",
                  },
                  { t: "Commande", d: "Les clients achètent en toute sécurité via Mobile Money." },
                  { t: "Dispatch", d: "L'algorithme affecte la course au livreur le plus proche." },
                  { t: "Livraison", d: "Suivez votre colis en temps réel sur la carte." },
                ].map((step, i) => (
                  <div key={step.t} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold">{step.t}</h4>
                      <p className="mt-1 text-muted-foreground">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:ml-auto">
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-2xl" />
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[3rem] border-8 border-card bg-card shadow-2xl">
                <img
                  src={appMockup}
                  alt="Interface de l'application mobile GoLivra pour commander en ligne à Brazzaville"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                    Interface Client
                  </p>
                  <p className="mt-2 text-2xl font-black">Simple. Rapide. Efficace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LES SOLUTIONS (GRID) */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <Eyebrow>L'arsenal digital</Eyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Tous les outils pour gagner.
            </h2>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShoppingBag,
                title: "Marketplace",
                text: "Visibilité instantanée pour vos produits.",
              },
              {
                icon: ClipboardList,
                title: "Gestion Commandes",
                text: "Fini le chaos des messages WhatsApp.",
              },
              {
                icon: Truck,
                title: "Réseau Logistique",
                text: "Livreurs certifiés à votre disposition.",
              },
              {
                icon: CreditCard,
                title: "Transactions",
                text: "Paiements sécurisés et virements rapides.",
              },
              {
                icon: BarChart3,
                title: "Analytique",
                text: "Comprenez vos ventes et vos clients.",
              },
              {
                icon: ShieldCheck,
                title: "Confiance",
                text: "Modération et protection des acheteurs.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group rounded-3xl border border-border bg-card p-8 transition-all hover:bg-primary hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-xl font-black group-hover:text-white">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-white/80">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON (Before/After) */}
      <section className="bg-foreground py-24 text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary ring-1 ring-primary/30">
            La Différence GoLivra
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            Pourquoi changer vos habitudes ?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            Le commerce traditionnel à Brazzaville est plein de frictions. GoLivra apporte la
            structure nécessaire pour passer à la vitesse supérieure.
          </p>

          <div className="mt-16 space-y-4 text-left max-w-2xl mx-auto">
            {[
              { a: "Ventes via messages vocaux", b: "Catalogue structuré & pro" },
              { a: "Livreurs trouvés au hasard", b: "Réseau de pros notés" },
              { a: "Pas d'historique de ventes", b: "Tableaux de bord complets" },
              { a: "Paiement à la livraison risqué", b: "Paiement sécurisé en amont" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60">
                  <X className="h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-sm line-through">{item.a}</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-primary">
                  <Check className="h-5 w-5 shrink-0" />
                  <span>{item.b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black tracking-tighter md:text-8xl">
            Prêt à <span className="text-primary italic">propulser</span>
            <br />
            votre activité ?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Rejoignez des centaines de commerçants et transporteurs qui façonnent le futur du
            commerce au Congo.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to="/solution"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-black text-primary-foreground shadow-2xl transition-all hover:scale-105 hover:bg-primary/90 active:scale-95 sm:w-auto"
            >
              Commencer maintenant
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
            <Link
              to="/partenaire"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-10 py-5 text-xl font-black transition-all hover:bg-secondary active:scale-95 sm:w-auto"
            >
              Contacter l'équipe
            </Link>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
              Ou téléchargez l'application
            </p>
            <StoreBadges variant="solid" />
          </div>

          <p className="mt-10 text-sm font-medium text-muted-foreground">
            Pas de frais d'inscription · Sans engagement · Support local 24/7
          </p>
        </div>
      </section>
    </div>
  );
}
