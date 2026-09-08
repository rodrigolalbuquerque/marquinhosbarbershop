"use client";

import { useState } from "react";
import { logoFace, logoText } from "@/lib/content";
import { container } from "@/lib/styles";
import { Arrow } from "@/components/Arrow";

const navLink = "transition-colors hover:text-copper";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="absolute z-10 w-full text-white text-shadow-[0_1px_16px_rgba(0,0,0,.65)]">
      <div
        className={`${container} flex h-24 items-center justify-between max-md:h-19`}
      >
        <a
          href="#inicio"
          className="flex items-center gap-2.5"
          aria-label="Marquinhos Barber Shop, início"
        >
          <img src={logoFace} alt="" className="h-16 w-auto object-contain" />
          <img
            src={logoText}
            alt="Marquinhos Barber Shop"
            className="h-9 w-auto object-contain"
          />
        </a>
        <nav
          aria-label="Navegação principal"
          className={
            "flex items-center gap-[clamp(18px,2.8vw,40px)] text-[12px] font-bold uppercase tracking-[.06em] max-md:absolute max-md:left-0 max-md:top-0 max-md:w-full max-md:flex-col max-md:items-start max-md:gap-6 max-md:bg-green max-md:px-6 max-md:pb-8.75 max-md:pt-25 " +
            (menuOpen ? "max-md:flex" : "max-md:hidden")
          }
        >
          <a href="#servicos" onClick={close} className={navLink}>
            Serviços e preços
          </a>
          <a href="#barbeiros" onClick={close} className={navLink}>
            Barbeiros
          </a>
          <a href="#unidades" onClick={close} className={navLink}>
            Unidades
          </a>
          <a href="#sobre" onClick={close} className={navLink}>
            Sobre
          </a>
          <a href="#agendar" onClick={close} className={navLink}>
            Já sou cliente
          </a>
          <a
            href="#agendar"
            onClick={close}
            className="border border-copper px-4 py-3 text-copper transition-colors hover:bg-copper hover:text-white"
          >
            Agendar <Arrow />
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          className="relative z-[3] hidden gap-1.25 border-0 bg-transparent p-2 max-md:grid"
        >
          <span className="block h-px w-6.25 bg-white" />
          <span className="block h-px w-6.25 bg-white" />
        </button>
      </div>
    </header>
  );
}
