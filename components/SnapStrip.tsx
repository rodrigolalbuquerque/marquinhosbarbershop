"use client";

import { useState, type ReactNode } from "react";

// Tira com rolagem lateral no mobile (scroll-snap + "espiada" do próximo item)
// e grade normal no desktop. Usada em conteúdo de VITRINE (barbeiros, inspiração).
// Mostra a dica "Arraste →" até a pessoa rolar pela primeira vez.
type SnapStripProps = {
  children: ReactNode;
  /** Classes do layout no desktop (ex.: "md:grid md:grid-cols-3 md:gap-4.5") */
  className?: string;
};

export function SnapStrip({ children, className = "" }: SnapStripProps) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div>
      <div
        onScroll={() => setScrolled(true)}
        className={
          "max-md:-mx-5 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:px-5 max-md:pb-1 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden max-md:[&>*]:w-[78%] max-md:[&>*]:shrink-0 max-md:[&>*]:snap-start " +
          className
        }
      >
        {children}
      </div>
      <p
        aria-hidden="true"
        className={`mt-3 flex justify-end text-2xl text-copper transition-opacity duration-500 md:hidden ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="animate-swipe-hint inline-block">←</span>
      </p>
    </div>
  );
}
