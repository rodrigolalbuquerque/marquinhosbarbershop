import type { ReactNode } from "react";
import { Arrow } from "@/components/Arrow";

// Link de texto reutilizável (rótulo maiúsculo + filete cobre + seta).
type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-5.5 border-b border-copper pb-2.25 text-[10px] font-bold uppercase tracking-[.08em] text-green-900 ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
