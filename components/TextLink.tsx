import type { ReactNode } from "react";
import { Arrow } from "@/components/Arrow";

// Link de texto reutilizável (rótulo maiúsculo + filete cobre + seta).
// min-h garante alvo de toque confortável no mobile.
type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center gap-5.5 border-b border-copper pb-2.25 text-[12px] md:text-[10px] font-bold uppercase tracking-[.08em] text-green-900 transition-colors hover:text-green active:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
