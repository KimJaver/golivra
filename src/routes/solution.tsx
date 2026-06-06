import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { ShoppingBag, UtensilsCrossed, Truck, Check } from "lucide-react";
import vendorImg from "@/assets/vendor.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import deliveryImg from "@/assets/delivery.jpg";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Notre Solution E-commerce & Logistique — GoLivra" },
      { name: "description", content: "Découvrez comment GoLivra transforme le commerce au Congo avec sa marketplace, son système de gestion pour restaurants et son réseau logistique intelligent." },
      { name: "keywords", content: "solution e-commerce Congo, logiciel restaurant Brazzaville, logistique dernier kilomètre, marketplace locale" },
    ],
  }),
  component: SolutionPage,
});

const blocks = [
  {
    letter: "A",
    title: "Marketplace",
    tag: "Cœur visibilité",
    icon: ShoppingBag,
    img: vendorImg,
    text: "Les vendeurs peuvent publier leurs produits directement dans l'application : photos, description et disponibilité. Les clients peuvent parcourir, comparer, ajouter au panier et commander directement. Comme Amazon, mais local et simple.",
    bullets: ["Photos & descriptions", "Disponibilité", "Panier & commande directe", "Comparaison locale"],
  },
  {
    letter: "B",
    title: "Restaurants",
    tag: "Expérience client",
    icon: UtensilsCrossed,
    img: restaurantImg,
    text: "Les restaurants peuvent afficher leur menu, recevoir des commandes directement dans l'app, gérer les commandes plus proprement que sur WhatsApp et envoyer les commandes en livraison.",
    bullets: ["Menu en ligne", "Commandes centralisées", "Gestion sans chaos", "Envoi en livraison"],
  },
  {
    letter: "C",
    title: "Livraison",
    tag: "Cœur opérationnel",
    icon: Truck,
    img: deliveryImg,
    text: "GoLivra ne possède pas de livreurs. La plateforme connecte la demande à des livreurs ou sociétés existantes, à la volée : le vendeur valide une commande, clique « livraison », choisit une option disponible, la livraison est exécutée et le paiement effectué.",
    bullets: ["Réseau partenaires", "Demande à la volée", "Choix d'options", "Paiement intégré"],
  },
];

function SolutionPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-24 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>La solution</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            Une plateforme.<br />
            <span className="text-primary italic">Trois systèmes.</span><br />
            Un écosystème.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">
            GoLivra est l'infrastructure digitale qui structure le commerce
            informel de Brazzaville en combinant marketplace, restaurants et
            livraison à la demande.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {blocks.map((b, i) => (
            <div key={b.title} className={`grid items-center gap-16 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative group">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                <img 
                  src={b.img} 
                  alt={`GoLivra ${b.title} - Solution e-commerce et logistique au Congo`} 
                  loading="lazy" 
                  width={1200} 
                  height={900} 
                  className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                />
                <div className="absolute -bottom-6 -right-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-4xl font-black text-white shadow-xl">
                  {b.letter}
                </div>
              </div>
              
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary">
                  {b.tag}
                </span>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">{b.title}</h2>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{b.text}</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {b.bullets.map((bl) => (
                    <div key={bl} className="flex items-center gap-3 rounded-2xl bg-secondary/50 p-4 transition-colors hover:bg-secondary">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-bold">{bl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Logique globale</Eyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Trois couches interconnectées.
          </h2>
          
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Commerce", d: "Digitalisation complète du catalogue et de la visibilité marchande." },
              { n: "02", t: "Commande", d: "Sécurisation du flux monétaire et de la validation transactionnelle." },
              { n: "03", t: "Livraison", d: "Optimisation du dernier kilomètre via un réseau de pros certifiés." },
            ].map((s) => (
              <div key={s.n} className="group relative rounded-[2.5rem] bg-card p-10 shadow-sm ring-1 ring-border transition-all hover:-translate-y-2 hover:shadow-xl hover:ring-primary/20">
                <div className="text-5xl font-black text-primary/10 transition-colors group-hover:text-primary/20">{s.n}</div>
                <h3 className="mt-6 text-2xl font-black">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <Eyebrow>MVP & Lancement</Eyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Focus sur l'essentiel.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Pour le lancement, nous avons sélectionné les fonctionnalités qui génèrent 
              le plus de valeur immédiate pour votre activité.
            </p>
          </div>
          
          <div className="mt-20 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block -translate-y-1/2" />
            <div className="grid gap-8 lg:grid-cols-5 relative">
              {["Marketplace", "Ajout Produit", "Commande MM", "Dispatch", "Tracking"].map((step, i) => (
                <div key={step} className="group flex flex-col items-center text-center lg:bg-background lg:px-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary font-black text-xl text-white shadow-xl shadow-primary/20 transition-transform group-hover:scale-110">
                    {i + 1}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xl font-black tracking-tight">{step}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Version 1.0</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}