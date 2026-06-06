import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(2, "Le nom de la société est requis"),
  email: z.string().email("Veuillez saisir un email valide"),
  phone: z.string().min(9, "Le numéro de téléphone doit être valide"),
  fleetSize: z.string().min(1, "Veuillez indiquer la taille de votre flotte"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const FLEET_LABELS: Record<string, string> = {
  "1-5": "1 à 5 livreurs",
  "6-20": "6 à 20 livreurs",
  "21-50": "21 à 50 livreurs",
  "50+": "Plus de 50 livreurs",
};

export function SaasAccessDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      fleetSize: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Demande d'accès démo SaaS logistique — ${values.company}`);
    const body = encodeURIComponent(
      `Nom: ${values.name}\n` +
        `Société: ${values.company}\n` +
        `Email: ${values.email}\n` +
        `Téléphone: ${values.phone}\n` +
        `Taille de flotte: ${FLEET_LABELS[values.fleetSize] ?? values.fleetSize}\n\n` +
        `Message:\n${values.message ?? "(aucun)"}`,
    );

    window.location.href = `mailto:kimjaver7@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Votre application de messagerie va s'ouvrir pour envoyer la demande.");
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-black text-primary transition-all hover:scale-105 active:scale-95 shadow-xl"
        >
          Demander un accès démo
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl p-0 sm:max-w-xl">
        <div className="bg-gradient-to-br from-primary to-primary/70 p-6 text-white sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-widest backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            100% Gratuit
          </div>
          <DialogHeader className="mt-4 space-y-2 text-left">
            <DialogTitle className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Accès démo au SaaS GoLivra
            </DialogTitle>
            <DialogDescription className="text-base text-white/80">
              Remplissez ce court formulaire. Notre équipe vous recontactera sous 24 à 48h pour
              activer votre accès et planifier une démo personnalisée.
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Marie Diallo"
                        {...field}
                        className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Société *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Flash Delivery"
                        {...field}
                        className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email professionnel *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="contact@societe.com"
                        {...field}
                        className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="06 XXX XX XX"
                        {...field}
                        className="rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="fleetSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taille de votre flotte *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl border-border/50 bg-secondary/30 focus:ring-primary">
                        <SelectValue placeholder="Choisir..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(FLEET_LABELS).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Un détail à nous partager ? Vos besoins, vos zones d'opération..."
                      className="min-h-[100px] resize-none rounded-xl border-border/50 bg-secondary/30 focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-xl bg-primary py-6 text-base font-black text-white transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20"
            >
              Envoyer ma demande
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
