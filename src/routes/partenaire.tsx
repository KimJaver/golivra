import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eyebrow } from "@/components/Eyebrow";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  CheckCircle2,
  Store,
  Truck,
  UtensilsCrossed,
  Users,
  MessageCircle,
  Handshake,
  Building2,
} from "lucide-react";

type FormMode = "contact" | "partenaire";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir un email valide"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Veuillez préciser le sujet"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

const partnerSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  type: z.string().min(1, "Veuillez choisir un type de partenariat"),
  city: z.string().min(1, "Veuillez choisir une ville"),
  phone: z.string().min(9, "Le numéro de téléphone doit être valide"),
  message: z.string().min(10, "Veuillez nous en dire un peu plus sur votre activité"),
});

type ContactValues = z.infer<typeof contactSchema>;
type PartnerValues = z.infer<typeof partnerSchema>;

export const Route = createFileRoute("/partenaire")({
  head: () => ({
    meta: [
      { title: "Contact & Partenariat — GoLivra" },
      {
        name: "description",
        content:
          "Contactez l'équipe GoLivra ou devenez partenaire : commerçant, restaurateur, livreur ou société de logistique à Brazzaville.",
      },
    ],
  }),
  component: PartnerPage,
});

const inputClass = "rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary";

const PARTNER_TYPES: Array<{ value: string; label: string }> = [
  { value: "boutique", label: "Boutique / Commerçant" },
  { value: "restaurant", label: "Restaurant / Snack" },
  { value: "livreur", label: "Livreur Indépendant" },
  { value: "logistique", label: "Société de Logistique" },
  { value: "autre", label: "Autre" },
];

const CONTACT_SUBJECTS: Array<{ value: string; label: string }> = [
  { value: "information", label: "Demande d'information" },
  { value: "presse", label: "Presse / Média" },
  { value: "support", label: "Support / Aide" },
  { value: "partenariat-commercial", label: "Partenariat commercial" },
  { value: "autre", label: "Autre" },
];

const CITIES: Array<{ value: string; label: string }> = [
  { value: "brazzaville", label: "Brazzaville" },
  { value: "pointe-noire", label: "Pointe-Noire" },
  { value: "autre", label: "Autre ville" },
];

function PartnerPage() {
  const [mode, setMode] = useState<FormMode>("contact");

  const contactForm = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const partnerForm = useForm<PartnerValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { name: "", type: "", city: "", phone: "", message: "" },
  });

  function onContactSubmit(values: ContactValues) {
    const subjectLabel =
      CONTACT_SUBJECTS.find((s) => s.value === values.subject)?.label ?? values.subject;
    const subject = encodeURIComponent(`[Contact GoLivra] ${subjectLabel} — ${values.name}`);
    const body = encodeURIComponent(
      `Nom: ${values.name}\n` +
        `Email: ${values.email}\n` +
        `Téléphone: ${values.phone ?? "(non renseigné)"}\n` +
        `Sujet: ${subjectLabel}\n\n` +
        `Message:\n${values.message}`,
    );

    window.location.href = `mailto:kimjaver7@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Votre application de messagerie va s'ouvrir pour envoyer le message.");
    contactForm.reset();
  }

  function onPartnerSubmit(values: PartnerValues) {
    const typeLabel = PARTNER_TYPES.find((t) => t.value === values.type)?.label ?? values.type;
    const cityLabel = CITIES.find((c) => c.value === values.city)?.label ?? values.city;
    const subject = encodeURIComponent(`[Partenariat GoLivra] ${typeLabel} — ${values.name}`);
    const body = encodeURIComponent(
      `Nom: ${values.name}\n` +
        `Type: ${typeLabel}\n` +
        `Ville: ${cityLabel}\n` +
        `Téléphone: ${values.phone}\n\n` +
        `Message:\n${values.message}`,
    );

    window.location.href = `mailto:kimjaver7@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Votre application de messagerie va s'ouvrir pour envoyer la demande.");
    partnerForm.reset();
  }

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Contact & Partenariat</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            Une question ? <br />
            <span className="text-primary italic">Parlons-en.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Contactez notre équipe pour toute question, ou rejoignez l'écosystème GoLivra en
            devenant commerçant, restaurateur, livreur ou société de logistique.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Pourquoi nous rejoindre ?
              </h2>
              <div className="mt-12 space-y-8">
                {[
                  {
                    icon: Store,
                    title: "Plus de visibilité",
                    desc: "Exposez vos produits à des milliers de clients potentiels chaque jour.",
                  },
                  {
                    icon: UtensilsCrossed,
                    title: "Gestion simplifiée",
                    desc: "Fini le chaos des commandes WhatsApp. Gérez tout depuis une interface dédiée.",
                  },
                  {
                    icon: Truck,
                    title: "Logistique intégrée",
                    desc: "Ne vous souciez plus de la livraison. Notre réseau s'en occupe pour vous.",
                  },
                  {
                    icon: Users,
                    title: "Support dédié",
                    desc: "Une équipe locale pour vous accompagner dans votre digitalisation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 rounded-[2.5rem] bg-secondary/50 p-8 ring-1 ring-border">
                <div className="flex items-center gap-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                  <span className="text-lg font-black uppercase tracking-wider">
                    Processus simple
                  </span>
                </div>
                <p className="mt-4 font-medium leading-relaxed text-muted-foreground">
                  Remplissez le formulaire ci-contre. Notre équipe analyse votre profil et vous
                  recontacte sous 24h à 48h pour finaliser votre inscription et vous former à
                  l'utilisation de nos outils.
                </p>
              </div>
            </div>

            <div className="rounded-[3rem] bg-card p-8 shadow-2xl shadow-primary/5 ring-1 ring-border lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {mode === "contact" ? (
                    <MessageCircle className="h-6 w-6" />
                  ) : (
                    <Handshake className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    {mode === "contact" ? "Contactez-nous" : "Devenir partenaire"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Les champs marqués d'une * sont obligatoires.
                  </p>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-2 rounded-2xl bg-secondary/40 p-1.5">
                <button
                  type="button"
                  onClick={() => setMode("contact")}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition-all cursor-pointer ${
                    mode === "contact"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={mode === "contact"}
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact
                </button>
                <button
                  type="button"
                  onClick={() => setMode("partenaire")}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition-all cursor-pointer ${
                    mode === "partenaire"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={mode === "partenaire"}
                >
                  <Handshake className="h-4 w-4" />
                  Partenariat
                </button>
              </div>

              {mode === "contact" ? (
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <FormField
                      control={contactForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Marie Diallo"
                              {...field}
                              className={inputClass}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={contactForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="vous@exemple.com"
                                {...field}
                                className={inputClass}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="06 XXX XX XX" {...field} className={inputClass} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={contactForm.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={inputClass}>
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CONTACT_SUBJECTS.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Votre message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Écrivez votre message ici..."
                              className={`${inputClass} min-h-[140px] resize-none`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-6 text-lg font-black text-white transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-95 shadow-xl shadow-primary/20"
                    >
                      Envoyer mon message
                    </Button>
                  </form>
                </Form>
              ) : (
                <Form {...partnerForm}>
                  <form onSubmit={partnerForm.handleSubmit(onPartnerSubmit)} className="space-y-6">
                    <FormField
                      control={partnerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom de l'établissement / Nom complet *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Boutique Brazza Mode"
                              {...field}
                              className={inputClass}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={partnerForm.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type d'activité *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className={inputClass}>
                                  <SelectValue placeholder="Choisir..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PARTNER_TYPES.map((t) => (
                                  <SelectItem key={t.value} value={t.value}>
                                    {t.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={partnerForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ville *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className={inputClass}>
                                  <SelectValue placeholder="Choisir..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CITIES.map((c) => (
                                  <SelectItem key={c.value} value={c.value}>
                                    {c.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={partnerForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de téléphone *</FormLabel>
                          <FormControl>
                            <Input placeholder="06 XXX XX XX" {...field} className={inputClass} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={partnerForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dites-nous en plus sur votre activité *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez brièvement vos produits ou services..."
                              className={`${inputClass} min-h-[120px] resize-none`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-6 text-lg font-black text-white transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-95 shadow-xl shadow-primary/20"
                    >
                      Envoyer ma demande
                    </Button>
                  </form>
                </Form>
              )}

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary/30 p-4 text-sm text-muted-foreground">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p>Brazzaville, République du Congo — Nous répondons sous 24 à 48h ouvrées.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
