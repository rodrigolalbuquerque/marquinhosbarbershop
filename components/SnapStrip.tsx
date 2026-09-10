"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// Tira com rolagem lateral no mobile (scroll-snap + "espiada" do próximo item)
// e grade normal no desktop. Usada em conteúdo de VITRINE (barbeiros, inspiração).
// A seta animada fica visível até a tira chegar na última foto.
type SnapStripProps = {
  children: ReactNode;
  /** Classes do layout no desktop (ex.: "md:grid md:grid-cols-3 md:gap-4.5") */
  className?: string;
};

// Folga para arredondamento de subpixel: sem ela a seta pode nunca sumir.
const END_TOLERANCE = 4;

export function SnapStrip({ children, className = "" }: SnapStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const checkEnd = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // Sem transbordo (desktop, ou poucos itens) a dica não faz sentido.
    setAtEnd(max <= END_TOLERANCE || el.scrollLeft >= max - END_TOLERANCE);
  }, []);

  useEffect(() => {
    checkEnd();
    window.addEventListener("resize", checkEnd);
    return () => window.removeEventListener("resize", checkEnd);
  }, [checkEnd]);

  return (
    <div>
      <div
        ref={stripRef}
        onScroll={checkEnd}
        className={
          "max-md:-mx-5 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:px-5 max-md:pb-1 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden max-md:[&>*]:w-[78%] max-md:[&>*]:shrink-0 max-md:[&>*]:snap-start " +
          className
        }
      >
        {children}
      </div>
      <p
        aria-hidden="true"
        className={`pointer-events-none mt-3 flex justify-end text-2xl text-copper transition-opacity duration-500 md:hidden ${
          atEnd ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="animate-swipe-hint inline-block">←</span>
      </p>
    </div>
  );
}
