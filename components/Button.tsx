import type { ReactNode } from "react";

// Botão reutilizável.
// variant: "copper" (padrão) | "light" · full: ocupa a largura toda no mobile.
// Hover e :active só escurecem o bg (mesma paleta) — no toque, o pressed é o feedback.
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "copper" | "light";
  full?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "copper",
  full = false,
  className = "",
}: ButtonProps) {
  const styles =
    variant === "light"
      ? "bg-paper text-green hover:bg-[#e8e3d7] active:bg-[#ddd7c8]"
      : "bg-copper text-white hover:bg-[#b0885f] active:bg-[#a67d55]";
  const width = full ? "flex w-full justify-center md:inline-flex md:w-auto" : "inline-flex";
  return (
    <a
      href={href}
      className={`${width} min-h-12 items-center gap-3 px-6 py-4 text-[13px] font-bold uppercase tracking-[.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-[17px]">
        ↗
      </span>
    </a>
  );
}
