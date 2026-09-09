"use client";

import { useEffect, useState } from "react";
import { logoFace, logoText } from "@/lib/content";
import { container } from "@/lib/styles";
import { Arrow } from "@/components/Arrow";

const navLink =
  "transition-colors hover:text-copper max-md:flex max-md:min-h-14 max-md:items-center max-md:border-b max-md:border-white/15";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  // Menu em tela cheia: trava o scroll do fundo enquanto está aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-10 text-white text-shadow-[0_1px_16px_rgba(0,0,0,.65)]">
      <div
        className={`${container} flex h-19 items-center justify-between md:h-24`}
      >
        <a
          href="#inicio"
          onClick={close}
          className="relative z-50 flex items-center gap-2.5"
          aria-label="Marquinhos Barber Shop, início"
        >
          <img
            src={logoFace}
            alt=""
            className="h-12 w-auto object-contain md:h-16"
          />
          <img
            src={logoText}
            alt="Marquinhos Barber Shop"
            className="h-6 w-auto object-contain md:h-9"
          />
        </a>

        <div className="flex items-center gap-3 md:gap-[clamp(18px,2.8vw,40px)]">
          {/* Mobile: menu em tela cheia. Desktop: nav inline. */}
          <nav
            aria-label="Navegação principal"
            className={
              "flex items-center gap-[clamp(18px,2.8vw,40px)] text-[12px] font-bold uppercase tracking-[.06em] max-md:fixed max-md:inset-0 max-md:z-40 max-md:h-dvh max-md:flex-col max-md:items-stretch max-md:justify-center max-md:gap-0 max-md:overflow-y-auto max-md:bg-green max-md:px-6 max-md:text-[17px] max-md:text-white max-md:[text-shadow:none] " +
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
          </nav>

          {/* Agendar fica SEMPRE visível — nunca entra na gaveta. */}
          <a
            href="#agendar"
            onClick={close}
            className="relative z-50 flex min-h-11 items-center border border-copper px-4 py-3 text-[12px] font-bold uppercase tracking-[.06em] text-copper transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper active:bg-copper active:text-white"
          >
            Agendar <Arrow />
          </a>

          {/* Hambúrguer que vira X quando o menu abre. */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="relative z-50 hidden size-11 place-content-center gap-1.25 border-0 bg-transparent max-md:grid"
          >
            <span
              className={`block h-px w-6.25 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6.25 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
