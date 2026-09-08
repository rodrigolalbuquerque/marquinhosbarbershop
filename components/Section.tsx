import type { ReactNode } from "react";
import { sectionY, container } from "@/lib/styles";

// Seção padrão: fundo full-bleed no <section>, conteúdo num container centralizado.
type SectionProps = {
  id?: string;
  bg?: string; // classe de fundo (ex.: "bg-warm")
  className?: string;
  children: ReactNode;
};

export function Section({ id, bg = "", className = "", children }: SectionProps) {
  return (
    <section id={id} className={`${bg} ${sectionY} ${className}`.trim()}>
      <div className={container}>{children}</div>
    </section>
  );
}
