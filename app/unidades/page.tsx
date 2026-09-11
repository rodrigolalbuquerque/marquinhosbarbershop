import type { Metadata } from "next";
import { units, whatsappLink, type Unit } from "@/lib/content";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Pin } from "@/components/Pin";
import { Arrow } from "@/components/Arrow";
import { body, h2green, label } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Unidades",
  description:
    "As unidades da Marquinhos Barber Shop no Rio de Janeiro: endereço e WhatsApp de cada loja.",
};

// PLACEHOLDER: foto reaproveitada. Trocar por foto real de loja.
const heroImage =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85";

function mapLink(unit: Unit) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Marquinhos Barber Shop, ${unit.street}, ${unit.district}, Rio de Janeiro, ${unit.cep}`,
  )}`;
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Onde estamos"
        title="Encontre a Marquinhos"
        accent="perto de você."
        image={heroImage}
        alt="Interior de uma unidade da Marquinhos Barber Shop"
      />

      <Section bg="bg-paper">
        {/* Título ocupa a largura toda: em duas colunas ele quebrava em cinco
            linhas, porque a frase é bem mais longa que a das outras páginas. */}
        <h2 className={h2green}>
          O mesmo cuidado,
          <br />
          <span className="text-copper">onde for melhor para{" "}você.</span>
        </h2>
        <p className={`${body} mt-7 mb-0 max-w-[62ch] text-ink md:mt-9`}>
          Encontre a unidade mais conveniente para você e fale direto com a
          equipe para marcar seu horário.
        </p>

        <ul className="mt-14 grid list-none gap-x-4.5 gap-y-9 p-0 md:mt-20 md:grid-cols-2">
          {units.map((unit) => (
            <li
              key={unit.slug}
              className="flex max-w-[440px] flex-col border-t border-line pt-6"
            >
              <h3 className="mb-3 mt-0 flex items-center gap-2.5 font-serif text-[26px] font-bold leading-tight tracking-[-.03em] text-green md:text-[30px]">
                <Pin />
                {unit.name}
              </h3>

              <p className={`${body} m-0 text-ink`}>
                {unit.street}
                <br />
                {unit.district}, Rio de Janeiro · {unit.cep}
              </p>

              {/* Horário ainda não levantado: melhor omitir do que arriscar
                  publicar horário errado (princípio de curadoria, D-029). */}
              <p className={`${label} mt-4 mb-0`}>
                WhatsApp {unit.whatsappLabel}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={whatsappLink(
                    unit,
                    `Olá! Gostaria de marcar um horário na unidade ${unit.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center bg-copper px-5 py-3 text-[12px] font-bold uppercase tracking-[.08em] text-white transition-colors hover:bg-[#b0885f] active:bg-[#a67d55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                >
                  Marcar pelo WhatsApp <Arrow />
                </a>
                <a
                  href={mapLink(unit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-4 border-b border-copper pb-1.5 text-[12px] font-bold uppercase tracking-[.08em] text-green-900 transition-colors hover:text-green active:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                >
                  Ver no mapa <Arrow />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
