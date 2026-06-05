import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { Store, BarChart3, Package, Globe, ArrowRight, Check, Zap } from "lucide-react";
import vendorImg from "@/assets/vendor.jpg";

export const Route = createFileRoute("/commercants")({
  head: () => ({
    meta: [
      { title: "Espace Commerçants — GoLivra" },
      { name: "description", content: "Digitalisez votre boutique, gérez vos stocks et boostez vos ventes avec les outils puissants de GoLivra." },
    ],
  }),
  component: MerchantsPage,
});

function MerchantsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-24 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <img
          src={vendorImg}
          alt="Commerçant GoLivra"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Pour les Commerçants</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            Propulsez votre <br />
            <span className="text-primary italic">activité.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Des outils puissants pour digitaliser votre stock, gérer vos ventes 
            et booster votre visibilité. GoLivra vous donne les moyens des plus grandes enseignes.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {[
              {
                icon: Package,
                title: "Gestion de Stock",
                text: "Ajoutez, modifiez et gérez vos produits en temps réel. Gardez un contrôle total sur vos inventaires depuis votre smartphone.",
              },
              {
                icon: BarChart3,
                title: "Analyses de Ventes",
                text: "Suivez vos performances quotidiennes, identifiez vos produits phares et comprenez mieux vos clients pour vendre plus.",
              },
              {
                icon: Globe,
                title: "Visibilité 24/7",
                text: "Votre boutique est ouverte en permanence. Touchez des clients bien au-delà de votre quartier habituel.",
              },
            ].map((f) => (
              <div key={f.title} className="group rounded-[2.5rem] border border-border bg-card p-10 transition-all hover:shadow-xl">
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
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>L'avantage GoLivra</Eyebrow>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Plus qu'une application,<br />un partenaire.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Nous ne nous contentons pas de vous donner une plateforme. Nous vous fournissons 
                l'infrastructure complète pour réussir votre transformation digitale.
              </p>
              
              <div className="mt-12 space-y-6">
                {[
                  "Zéro frais d'installation",
                  "Formation gratuite à nos outils",
                  "Support technique local réactif",
                  "Paiements Mobile Money sécurisés",
                  "Logistique de livraison gérée à 100%",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-[3rem] bg-foreground p-10 text-white shadow-2xl">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="mt-8 text-3xl font-black italic">Une transition fluide vers le numérique.</h3>
              <p className="mt-6 text-white/60 leading-relaxed">
                Notre mission est de lever les barrières technologiques pour les commerçants du Congo. 
                Avec GoLivra, vous n'avez pas besoin d'être un expert en informatique pour 
                commencer à vendre en ligne et toucher de nouveaux clients.
              </p>
              <div className="mt-10 border-t border-white/10 pt-10">
                <p className="font-black">L'équipe GoLivra</p>
                <p className="text-sm text-white/40 font-bold uppercase tracking-widest">À vos côtés pour votre croissance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Prêt à digitaliser votre boutique ?</h2>
          <p className="mt-8 mx-auto max-w-2xl text-xl text-muted-foreground">
            Rejoignez l'écosystème GoLivra et ouvrez votre commerce à de nouvelles opportunités.
          </p>
          <div className="mt-12 flex justify-center">
            <Link to="/partenaire" className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-black text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              Devenir partenaire
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
