import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Store, Truck, UtensilsCrossed, Users } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  type: z.string().min(1, "Veuillez choisir un type de partenariat"),
  city: z.string().min(1, "Veuillez choisir une ville"),
  phone: z.string().min(9, "Le numéro de téléphone doit être valide"),
  message: z.string().min(10, "Veuillez nous en dire un peu plus sur votre activité"),
});

type FormValues = z.infer<typeof formSchema>;

export const Route = createFileRoute("/partenaire")({
  head: () => ({
    meta: [
      { title: "Devenir Partenaire — GoLivra" },
      { name: "description", content: "Rejoignez l'écosystème GoLivra et boostez votre activité commerciale au Congo." },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      city: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Nouvelle demande de partenariat : ${values.name}`);
    const body = encodeURIComponent(
      `Nom: ${values.name}\n` +
      `Type: ${values.type}\n` +
      `Ville: ${values.city}\n` +
      `Téléphone: ${values.phone}\n\n` +
      `Message:\n${values.message}`
    );
    
    window.location.href = `mailto:kimjaver7@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Votre application de messagerie va s'ouvrir pour envoyer la demande.");
    form.reset();
  }

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-primary/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Partenariat</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            Grandissons <br />
            <span className="text-primary italic">ensemble.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Rejoignez la plateforme qui transforme le commerce au Congo. 
            Que vous soyez commerçant, restaurateur ou livreur, GoLivra est votre partenaire de croissance.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Pourquoi nous rejoindre ?</h2>
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
                  <span className="text-lg font-black uppercase tracking-wider">Processus simple</span>
                </div>
                <p className="mt-4 text-muted-foreground font-medium leading-relaxed">
                  Remplissez le formulaire ci-contre. Notre équipe analyse votre profil 
                  et vous recontacte sous 24h à 48h pour finaliser votre inscription 
                  et vous former à l'utilisation de nos outils.
                </p>
              </div>
            </div>

            <div className="rounded-[3rem] bg-card p-8 shadow-2xl shadow-primary/5 ring-1 ring-border lg:p-12">
              <div className="mb-10">
                <h3 className="text-2xl font-black tracking-tight">Formulaire de demande</h3>
                <p className="mt-2 text-muted-foreground">Les champs marqués d'une * sont obligatoires.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom de l'établissement / Nom complet *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Boutique Brazza Mode" {...field} className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type d'activité *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-border/50 bg-secondary/30 focus:ring-primary">
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="boutique">Boutique / Commerçant</SelectItem>
                              <SelectItem value="restaurant">Restaurant / Snack</SelectItem>
                              <SelectItem value="livreur">Livreur Indépendant</SelectItem>
                              <SelectItem value="logistique">Société de Logistique</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ville *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-border/50 bg-secondary/30 focus:ring-primary">
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="brazzaville">Brazzaville</SelectItem>
                              <SelectItem value="pointe-noire">Pointe-Noire</SelectItem>
                              <SelectItem value="autre">Autre ville</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="06 XXX XX XX" {...field} className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dites-nous en plus sur votre activité *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez brièvement vos produits ou services..." 
                            className="min-h-[120px] rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary resize-none"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
