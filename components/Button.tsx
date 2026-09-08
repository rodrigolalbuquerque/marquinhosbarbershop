import type { ReactNode } from "react";

// Botão reutilizável. variant: "copper" (padrão) | "light". Hover só escurece o bg.
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "copper" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "copper",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "light"
      ? "bg-paper text-green hover:bg-[#e8e3d7]"
      : "bg-copper text-white hover:bg-[#b0885f]";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 px-6 py-4 text-[13px] font-bold uppercase tracking-[.12em] transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-[17px]">
        ↗
      </span>
    </a>
  );
}
