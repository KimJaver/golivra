import { Palmtree } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/lib/site-config";

type Variant = "solid" | "outline";
type Size = "default" | "sm";

interface StoreBadgesProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const SIZE_STYLES: Record<
  Size,
  { container: string; icon: string; small: string; big: string; gap: string }
> = {
  default: {
    container: "h-14 px-5",
    icon: "h-7 w-7",
    small: "text-[10px]",
    big: "text-lg",
    gap: "gap-3",
  },
  sm: {
    container: "h-12 px-4",
    icon: "h-6 w-6",
    small: "text-[9px]",
    big: "text-sm",
    gap: "gap-2.5",
  },
};

const VARIANT_STYLES: Record<Variant, string> = {
  solid: "bg-foreground text-background shadow-lg shadow-black/10 hover:bg-foreground/90",
  outline:
    "bg-white/5 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/15 hover:ring-white/50",
};

const STORE_LABELS = {
  appStore: "l'App Store",
  playStore: "Google Play",
  palmStore: "Palm Store",
} as const;

type StoreKey = keyof typeof STORE_LABELS;

function notifyComingSoon(store: StoreKey) {
  toast("Bientôt disponible", {
    description: `L'application GoLivra arrive très prochainement sur ${STORE_LABELS[store]}.`,
    duration: 4000,
  });
}

function AppleGlyph({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 384 512" className={`${className} fill-current shrink-0`} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 512 512" className={`${className} shrink-0`} aria-hidden="true">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#34A853" />
      <path
        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
        fill="#4285F4"
      />
      <path
        d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
        fill="#FBBC04"
      />
      <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#EA4335" />
    </svg>
  );
}

function PalmGlyph({ className }: { className: string }) {
  return (
    <Palmtree
      className={`${className} text-emerald-500 shrink-0`}
      strokeWidth={2}
      aria-hidden="true"
    />
  );
}

const STORES: Array<{
  key: StoreKey;
  url: string;
  ariaLabel: string;
  caption: string;
  name: string;
  Icon: (props: { className: string }) => JSX.Element;
}> = [
  {
    key: "appStore",
    url: siteConfig.appStoreUrl,
    ariaLabel: "Télécharger GoLivra sur l'App Store",
    caption: "Télécharger sur",
    name: "App Store",
    Icon: AppleGlyph,
  },
  {
    key: "playStore",
    url: siteConfig.playStoreUrl,
    ariaLabel: "Télécharger GoLivra sur Google Play",
    caption: "Disponible sur",
    name: "Google Play",
    Icon: PlayGlyph,
  },
  {
    key: "palmStore",
    url: siteConfig.palmStoreUrl,
    ariaLabel: "Télécharger GoLivra sur Palm Store",
    caption: "Disponible sur",
    name: "Palm Store",
    Icon: PalmGlyph,
  },
];

export function StoreBadges({
  variant = "solid",
  size = "default",
  className = "",
}: StoreBadgesProps) {
  const s = SIZE_STYLES[size];
  const v = VARIANT_STYLES[variant];
  const base = `inline-flex items-center ${s.gap} ${s.container} rounded-2xl font-display transition-all hover:scale-[1.03] active:scale-95`;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {STORES.map((store) => {
        const Icon = store.Icon;
        return (
          <button
            key={store.key}
            type="button"
            data-store-url={store.url}
            onClick={() => notifyComingSoon(store.key)}
            aria-label={store.ariaLabel}
            className={`${base} ${v}`}
          >
            <Icon className={s.icon} />
            <span className="flex flex-col items-start leading-tight">
              <span className={`${s.small} font-medium uppercase tracking-wider opacity-70`}>
                {store.caption}
              </span>
              <span className={`${s.big} font-black tracking-tight`}>{store.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
