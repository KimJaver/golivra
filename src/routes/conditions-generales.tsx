import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { FileText, ShieldCheck, Cookie, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/conditions-generales")({
  head: () => ({
    meta: [
      {
        title: "Conditions Générales & Mentions Légales — GoLivra",
      },
      {
        name: "description",
        content:
          "Consultez les conditions générales d'utilisation, la politique de confidentialité et la politique des cookies de GoLivra, la marketplace de Brazzaville.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
  component: LegalPage,
});

const LAST_UPDATED = "15 janvier 2026";

const SECTIONS = [
  { id: "cgu", label: "Conditions Générales", icon: FileText },
  { id: "confidentialite", label: "Confidentialité", icon: ShieldCheck },
  { id: "cookies", label: "Cookies", icon: Cookie },
] as const;

function LegalPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-28">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Mentions Légales</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl">
            Conditions Générales <br />
            <span className="text-primary italic">& Politique.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            Tout ce que vous devez savoir sur l'utilisation de GoLivra, la protection de vos données
            personnelles et l'usage des cookies sur notre plateforme.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-white/40">
            Dernière mise à jour : {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl bg-card p-4 ring-1 ring-border">
                <p className="px-3 pb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Sommaire
                </p>
                <nav className="flex flex-col gap-1">
                  {SECTIONS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1">
                          <span className="text-xs font-black text-muted-foreground">
                            0{i + 1}.
                          </span>{" "}
                          {s.label}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Une question ?
                </p>
                <a
                  href="mailto:kimjaver7@gmail.com"
                  className="mt-3 flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  Nous écrire
                </a>
              </div>
            </aside>

            <div className="space-y-16">
              <article id="cgu" className="scroll-mt-28">
                <header className="mb-8 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <FileText className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-primary">
                      Article 01
                    </p>
                    <h2 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">
                      Conditions Générales d'Utilisation
                    </h2>
                  </div>
                </header>

                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <Section title="1. Présentation de l'éditeur">
                    <p>
                      GoLivra est une plateforme numérique éditée par une société de droit
                      congolais, dont le siège social est situé à Brazzaville, République du Congo.
                      La plateforme met en relation des commerçants, des clients et des livreurs
                      afin de faciliter la commande, la vente et la livraison de biens et services à
                      Brazzaville et dans les zones desservies.
                    </p>
                  </Section>

                  <Section title="2. Acceptation des conditions">
                    <p>
                      L'accès et l'utilisation de la plateforme GoLivra impliquent l'acceptation
                      pleine et entière des présentes Conditions Générales d'Utilisation (CGU).
                      L'utilisateur s'engage à lire attentivement ces conditions avant toute
                      utilisation. Si vous n'acceptez pas ces conditions, vous êtes prié de ne pas
                      utiliser la plateforme.
                    </p>
                  </Section>

                  <Section title="3. Inscription et compte utilisateur">
                    <p>
                      Pour accéder à certaines fonctionnalités (commander, vendre, livrer), l'
                      utilisateur doit créer un compte en fournissant des informations exactes,
                      complètes et à jour. Toute information inexacte peut entraîner la suspension
                      ou la résiliation du compte. L'utilisateur est responsable de la
                      confidentialité de ses identifiants et de toutes les actions effectuées depuis
                      son compte.
                    </p>
                  </Section>

                  <Section title="4. Services proposés">
                    <p>GoLivra propose plusieurs types de services selon le profil :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Clients :</strong> commande de produits auprès de commerçants locaux
                        avec livraison à domicile.
                      </li>
                      <li>
                        <strong>Commerçants :</strong> gestion de catalogue, prise de commandes,
                        mise en relation avec des livreurs.
                      </li>
                      <li>
                        <strong>Livreurs :</strong> accès à un flux de missions de livraison et à
                        des outils de gestion de tournée.
                      </li>
                      <li>
                        <strong>Sociétés de logistique :</strong> accès à un SaaS gratuit de gestion
                        de flotte et de suivi en temps réel.
                      </li>
                    </ul>
                  </Section>

                  <Section title="5. Paiements et commissions">
                    <p>
                      Les transactions effectuées via GoLivra sont sécurisées et peuvent être
                      réglées par Mobile Money ou en paiement à la livraison selon les options
                      proposées par chaque commerçant. GoLivra prélève une commission de service sur
                      chaque transaction, dont le taux est communiqué de manière transparente avant
                      validation de la commande.
                    </p>
                  </Section>

                  <Section title="6. Responsabilités">
                    <p>
                      GoLivra agit en qualité d'intermédiaire technique entre les différentes
                      parties (clients, commerçants, livreurs). La plateforme ne vend aucun produit
                      en son nom propre et ne saurait être tenue responsable de la qualité des
                      produits vendus par les commerçants, ni des dommages survenus lors de la
                      livraison au-delà de l'assurance standard prévue.
                    </p>
                  </Section>

                  <Section title="7. Suspension et résiliation">
                    <p>
                      GoLivra se réserve le droit de suspendre ou de résilier tout compte en cas de
                      non-respect des présentes CGU, de comportement frauduleux, ou de violation de
                      la loi congolaise. L'utilisateur peut à tout moment demander la suppression de
                      son compte en contactant le support.
                    </p>
                  </Section>

                  <Section title="8. Modification des CGU">
                    <p>
                      GoLivra peut modifier les présentes CGU à tout moment pour les adapter aux
                      évolutions du service ou à la réglementation. Les utilisateurs seront informés
                      par notification ou par email. La poursuite de l'utilisation du service après
                      notification vaut acceptation des nouvelles conditions.
                    </p>
                  </Section>

                  <Section title="9. Droit applicable et juridiction">
                    <p>
                      Les présentes CGU sont régies par le droit congolais. Tout litige relatif à
                      leur interprétation ou à leur exécution relève de la compétence exclusive des
                      tribunaux de Brazzaville, sauf dispositions légales contraires.
                    </p>
                  </Section>
                </div>
              </article>

              <article id="confidentialite" className="scroll-mt-28">
                <header className="mb-8 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-primary">
                      Article 02
                    </p>
                    <h2 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">
                      Politique de Confidentialité
                    </h2>
                  </div>
                </header>

                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <Section title="1. Données collectées">
                    <p>
                      Dans le cadre de l'utilisation de GoLivra, nous collectons les données
                      suivantes :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Données d'identification :</strong> nom, prénom, numéro de
                        téléphone, adresse email.
                      </li>
                      <li>
                        <strong>Données de localisation :</strong> adresse de livraison, position
                        géographique lors de la livraison (avec votre consentement).
                      </li>
                      <li>
                        <strong>Données de transaction :</strong> historique des commandes,
                        montants, mode de paiement (sans conservation des détails de carte).
                      </li>
                      <li>
                        <strong>Données techniques :</strong> adresse IP, type d'appareil, système
                        d'exploitation, navigateur.
                      </li>
                    </ul>
                  </Section>

                  <Section title="2. Finalités d'utilisation">
                    <p>Vos données sont utilisées pour :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Fournir et améliorer nos services (livraison, paiement, support).</li>
                      <li>Assurer le suivi des commandes et la coordination entre les parties.</li>
                      <li>Vous informer des mises à jour et offres (avec votre accord).</li>
                      <li>Garantir la sécurité de la plateforme et prévenir la fraude.</li>
                      <li>Respecter nos obligations légales et comptables.</li>
                    </ul>
                  </Section>

                  <Section title="3. Partage des données">
                    <p>
                      Vos données sont partagées uniquement avec les parties strictement nécessaires
                      à la réalisation du service : le commerçant pour préparer la commande, le
                      livreur pour effectuer la livraison. GoLivra ne vend ni ne loue jamais vos
                      données personnelles à des tiers à des fins commerciales.
                    </p>
                  </Section>

                  <Section title="4. Durée de conservation">
                    <p>
                      Vos données sont conservées pendant toute la durée de votre relation avec
                      GoLivra, puis archivées pour la durée légale requise (10 ans pour les données
                      comptables, par exemple). Les données de compte sont supprimées dans les 30
                      jours suivant une demande de suppression.
                    </p>
                  </Section>

                  <Section title="5. Vos droits">
                    <p>
                      Conformément à la réglementation applicable, vous disposez à tout moment des
                      droits suivants :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Droit d'accès à vos données personnelles.</li>
                      <li>Droit de rectification des informations inexactes.</li>
                      <li>Droit à l'effacement ou à la limitation du traitement.</li>
                      <li>Droit d'opposition au traitement à des fins marketing.</li>
                      <li>Droit à la portabilité de vos données.</li>
                    </ul>
                    <p>
                      Pour exercer ces droits, contactez-nous à l'adresse{" "}
                      <a
                        href="mailto:kimjaver7@gmail.com"
                        className="font-bold text-primary hover:underline"
                      >
                        kimjaver7@gmail.com
                      </a>
                      .
                    </p>
                  </Section>

                  <Section title="6. Sécurité">
                    <p>
                      GoLivra met en œuvre toutes les mesures techniques et organisationnelles
                      appropriées pour protéger vos données : chiffrement des communications
                      (HTTPS), accès restreint aux données, sauvegardes régulières, formation des
                      équipes. Malgré ces efforts, aucun système n'étant infaillible, nous vous
                      invitons à nous signaler toute anomalie.
                    </p>
                  </Section>
                </div>
              </article>

              <article id="cookies" className="scroll-mt-28">
                <header className="mb-8 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <Cookie className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-primary">
                      Article 03
                    </p>
                    <h2 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">
                      Politique des Cookies
                    </h2>
                  </div>
                </header>

                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <Section title="1. Qu'est-ce qu'un cookie ?">
                    <p>
                      Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                      smartphone, tablette) lors de la visite d'un site web. Il permet au site de
                      mémoriser vos actions et préférences pendant une durée déterminée.
                    </p>
                  </Section>

                  <Section title="2. Cookies utilisés par GoLivra">
                    <p>Nous utilisons les catégories de cookies suivantes :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Cookies strictement nécessaires :</strong> indispensables au
                        fonctionnement du site (session utilisateur, panier). Ils ne nécessitent pas
                        de consentement.
                      </li>
                      <li>
                        <strong>Cookies de mesure d'audience :</strong> nous permettent de
                        comprendre comment les utilisateurs interagissent avec le site (pages
                        visitées, durée, parcours) afin d'améliorer l'expérience.
                      </li>
                      <li>
                        <strong>Cookies de partage social :</strong> facilitent le partage de
                        contenu sur les réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn).
                      </li>
                    </ul>
                  </Section>

                  <Section title="3. Durée de conservation">
                    <p>
                      Les cookies sont conservés pour une durée maximale de 13 mois, conformément
                      aux recommandations de la CNIL et des autorités de protection des données.
                    </p>
                  </Section>

                  <Section title="4. Gestion des cookies">
                    <p>
                      Vous pouvez à tout moment accepter, refuser ou supprimer les cookies via les
                      paramètres de votre navigateur. La désactivation de certains cookies peut
                      néanmoins limiter l'accès à certaines fonctionnalités du site.
                    </p>
                  </Section>

                  <Section title="5. Contact">
                    <p>
                      Pour toute question relative à l'utilisation des cookies sur GoLivra,
                      contactez-nous à{" "}
                      <a
                        href="mailto:kimjaver7@gmail.com"
                        className="font-bold text-primary hover:underline"
                      >
                        kimjaver7@gmail.com
                      </a>
                      .
                    </p>
                  </Section>
                </div>
              </article>

              <aside className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-black">Besoin d'un éclaircissement ?</h3>
                <p className="mt-3 text-muted-foreground">
                  Notre équipe est disponible pour répondre à toutes vos questions concernant ces
                  conditions.
                </p>
                <ul className="mt-6 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:kimjaver7@gmail.com" className="hover:text-primary">
                      kimjaver7@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+242067811462" className="hover:text-primary">
                      +242 06 781 14 62
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    Brazzaville, République du Congo
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-xl font-black text-foreground">{title}</h3>
      <div className="mt-3 leading-relaxed">{children}</div>
    </section>
  );
}
