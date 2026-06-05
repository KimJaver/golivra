import logo from "@/assets/logo-golivra.png";

export function SiteLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logo} alt="GoLivra" className={className} />;
}