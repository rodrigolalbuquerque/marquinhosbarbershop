import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { label, h2green, body } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Nossa história",
  description:
    "Como o ofício veio antes da marca: do aprendizado com um tio à primeira barber shop da Ilha do Governador.",
};

// PLACEHOLDER: foto reaproveitada do banco de imagens. Trocar por foto real
// da rede quando entrar o material de produção.
const heroImage =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85";

// Copy derivada de ../context/01-marca-e-historia.md.
// Duas coisas ficam DE FORA de propósito: (1) explicar que "1992" é o início do
// fundador na profissão (D-005) e (2) os reveses financeiros e a sociedade
// desfeita, que são contexto interno, não storytelling público.
const paragraphs = [
  "Marquinhos aprendeu a cortar cabelo com um tio, logo depois de dar baixa do serviço militar. Na época a profissão nem tinha o nome que tem hoje, e quem vivia dela não era levado muito a sério.",
  "O começo foi duro. Antes de ter clientela, treinou onde deu para treinar. Depois vieram cinco anos em um salão de bairro nobre, e foi ali que aprendeu a atender.",
  "A virada veio mais tarde, numa loja afastada, cercado de gente boa. Foi quando percebeu que atender bem não bastava: faltava técnica. Correu atrás, e o jogo virou.",
  "Em 2014, no dia do próprio aniversário, viu um ponto vago em uma boa esquina e resolveu arriscar. Nascia a primeira barber shop da Ilha do Governador.",
];

const pillars: [string, string][] = [
  [
    "Técnica antes de tudo",
    "Atendimento bom abre a porta, técnica é o que faz voltar. Foi a lição que virou o jogo, e que o Marquinhos passa adiante para cada barbeiro da rede.",
  ],
  [
    "Barbearia de verdade",
    "Toalha quente, navalha e acabamento conferido no espelho. O serviço completo, não só o corte.",
  ],
  [
    "Mesmo padrão, qualquer loja",
    "Cada unidade tem suas particularidades, mas o padrão do trabalho é o mesmo em todas.",
  ],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Desde 1992 · Rio de Janeiro"
        title="O ofício veio"
        accent="antes da marca."
        image={heroImage}
        alt="Interior de uma unidade da Marquinhos Barber Shop"
      />

      <Section bg="bg-paper">
        <div className="grid gap-x-[clamp(40px,6vw,90px)] gap-y-8 md:grid-cols-[1fr_1.15fr] md:items-center">
          <h2 className={h2green}>
            Uma vida
            <br />
            <span className="text-copper">de barbearia.</span>
          </h2>
          <div className={`${body} max-w-[62ch] text-ink`}>
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="mt-0 mb-5 last:mb-0">
                {text}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="bg-warm">
        <p className={label}>O que não muda</p>
        <div className="mt-8 grid gap-x-[clamp(40px,6vw,90px)] gap-y-9 md:mt-12 md:grid-cols-3">
          {pillars.map(([title, text]) => (
            <article key={title} className="border-t border-line pt-5">
              <h3 className="mb-2 mt-0 font-serif text-[22px] font-bold leading-tight tracking-[-.03em] text-green md:text-[26px]">
                {title}
              </h3>
              <p className={`${body} m-0 text-ink`}>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
