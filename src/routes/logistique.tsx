import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { SaasAccessDialog } from "@/components/SaasAccessDialog";
import {
  Truck,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Users,
  LayoutDashboard,
  BarChart3,
  Sparkles,
} from "lucide-react";
import deliveryImg from "@/assets/delivery.jpg";

export const Route = createFileRoute("/logistique")({
  head: () => ({
    meta: [
      { title: "Optimisez vos Livraisons à Brazzaville — GoLivra Logistique" },
      {
        name: "description",
        content:
          "Rejoignez le réseau logistique GoLivra. Optimisez vos trajets, gérez votre flotte de livreurs et garantissez une livraison rapide à vos clients.",
      },
      {
        name: "keywords",
        content:
          "logistique Congo, service livraison Brazzaville, gestion de flotte, livreur Brazzaville",
      },
    ],
  }),
  component: LogisticsPage,
});

function LogisticsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-24 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <img
          src={deliveryImg}
          alt="Livreur GoLivra en pleine livraison à Brazzaville"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Pour la Logistique</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            L'excellence du <br />
            <span className="text-primary italic">dernier kilomètre.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Un réseau interconnecté pour optimiser chaque livraison et garantir une satisfaction
            totale. GoLivra est le pont entre les commerces et leurs clients.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Optimisation de trajet",
                text: "Notre algorithme calcule les routes les plus efficaces pour réduire les temps de trajet et les coûts opérationnels.",
              },
              {
                icon: Clock,
                title: "Gestion en Temps Réel",
                text: "Suivez chaque livreur, recevez des notifications instantanées et gérez les pics de demande sans stress.",
              },
              {
                icon: ShieldCheck,
                title: "Preuve de Livraison",
                text: "Système de validation sécurisé (code PIN ou signature) pour garantir que chaque colis arrive à bon port.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-[2.5rem] border border-border bg-card p-10 transition-all hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <f.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-2xl font-black">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/70 p-10 text-white shadow-2xl shadow-primary/20 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                100% Gratuit
              </span>
              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
                Un SaaS complet pour piloter votre flotte.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                GoLivra met à disposition des sociétés de logistique une plateforme SaaS entièrement
                gratuite : gestion des livreurs, dispatch automatique, suivi en temps réel,
                facturation et analytics de performance. Aucun frais, aucun engagement.
              </p>
              <SaasAccessDialog />
            </div>
            <ul className="space-y-5">
              {[
                {
                  icon: Users,
                  title: "Gestion de flotte",
                  text: "Affectez vos livreurs, suivez leur activité et leurs performances individuelles.",
                },
                {
                  icon: Zap,
                  title: "Dispatch intelligent",
                  text: "Attribution automatique des courses selon la proximité et la disponibilité.",
                },
                {
                  icon: LayoutDashboard,
                  title: "Dashboard temps réel",
                  text: "Visualisez les opérations en direct et anticipez les pics d'activité.",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & revenus",
                  text: "Mesurez vos KPIs, générez vos rapports et optimisez votre rentabilité.",
                },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Interconnectivité</Eyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Une infrastructure robuste.
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg text-muted-foreground">
            GoLivra connecte la demande à des livreurs ou sociétés existantes, à la volée. Nous
            fournissons le cerveau technologique qui orchestre la logistique locale.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Dispatch Auto", icon: Zap },
              { label: "Suivi Client", icon: MapPin },
              { label: "Sécurité Totale", icon: ShieldCheck },
              { label: "Logistique Agile", icon: Truck },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-6 rounded-3xl bg-card p-10 ring-1 ring-border transition-all hover:ring-primary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-black">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Rejoignez le réseau de livraison.
              </h2>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Que vous soyez un livreur indépendant ou une société de logistique avec une flotte
                complète, GoLivra vous apporte un flux constant de missions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/partenaire"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-black text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              >
                Devenir partenaire
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
