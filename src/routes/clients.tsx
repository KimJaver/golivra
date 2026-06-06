import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { StoreBadges } from "@/components/StoreBadges";
import { ShoppingBag, Search, CreditCard, Check } from "lucide-react";
import heroImg from "@/assets/hero-brazzaville.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Faites-vous livrer à Brazzaville — GoLivra Clients" },
      {
        name: "description",
        content:
          "Commandez vos repas et articles préférés sur GoLivra. Livraison rapide, paiement Mobile Money sécurisé et suivi en temps réel à Brazzaville.",
      },
      {
        name: "keywords",
        content:
          "commander repas Brazzaville, shopping en ligne Congo, livraison rapide Brazzaville, GoLivra clients",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-24 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <img
          src={heroImg}
          alt="Client utilisant l'application GoLivra pour ses achats à Brazzaville"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Pour les Clients</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            La ville dans <br />
            <span className="text-primary italic">votre poche.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Une marketplace intuitive pour découvrir le meilleur de votre ville et commander en un
            clic. Plus besoin de vous déplacer, GoLivra vient à vous.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Découvrez",
                text: "Explorez des centaines de boutiques et restaurants locaux. Trouvez exactement ce que vous cherchez, des vêtements aux plats préparés.",
              },
              {
                icon: ShoppingBag,
                title: "Commandez",
                text: "Un panier unique pour tous vos achats. Une interface simple et fluide pensée pour une expérience sans friction.",
              },
              {
                icon: CreditCard,
                title: "Payez",
                text: "Des options de paiement sécurisées et adaptées : Mobile Money ou paiement à la livraison selon vos préférences.",
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

      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <Eyebrow>Sécurité & Confiance</Eyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Achetez l'esprit tranquille.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Vendeurs Vérifiés",
                text: "Chaque commerçant sur GoLivra passe par un processus de vérification rigoureux pour garantir la qualité des produits.",
              },
              {
                title: "Suivi en Temps Réel",
                text: "Suivez votre commande de la préparation jusqu'à votre porte grâce à notre système de tracking intégré.",
              },
              {
                title: "Service Client Réactif",
                text: "Une équipe locale à votre écoute pour résoudre le moindre problème lié à votre commande ou livraison.",
              },
              {
                title: "Prix Transparents",
                text: "Pas de frais cachés. Le prix affiché est le prix que vous payez, frais de livraison inclus et détaillés.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-6 rounded-3xl bg-card p-8 ring-1 ring-border"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-20 text-white md:px-20">
            <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-white/10 blur-[100px]" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">Prêt à commander ?</h2>
              <p className="mt-8 text-xl text-white/80">
                Téléchargez l'application GoLivra et commencez votre expérience de shopping nouvelle
                génération dès aujourd'hui.
              </p>
              <div className="mt-12">
                <StoreBadges variant="outline" />
              </div>
              <p className="mt-8 text-sm font-medium uppercase tracking-widest text-white/60">
                Disponible sur iOS & Android · Compatible Mobile Money
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
