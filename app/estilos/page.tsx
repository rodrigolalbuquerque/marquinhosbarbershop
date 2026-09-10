import type { Metadata } from "next";
import Link from "next/link";
import { inspirations } from "@/lib/content";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { PhotoCaption } from "@/components/PhotoCaption";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { body, h2green } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Ideias de corte",
  description:
    "Um catálogo de cortes e barbas para você mostrar ao barbeiro. Sem precisar saber o nome técnico.",
};

// PLACEHOLDER: foto reaproveitada. Trocar quando entrar o material de produção.
const heroImage =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2000&q=90";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Inspiração"
        title="Quer uma ideia"
        accent="de corte?"
        image={heroImage}
        alt="Barbeiro finalizando o acabamento de um corte"
      />

      <Section bg="bg-paper">
        <div className="grid gap-x-[clamp(40px,6vw,90px)] gap-y-6 md:grid-cols-[1fr_1.15fr]">
          <h2 className={h2green}>
            Não precisa
            <br />
            <span className="text-copper">saber o nome.</span>
          </h2>
          <p className={`${body} m-0 max-w-[62ch] self-end text-ink`}>
            A maior parte das pessoas chega sem saber como se chama o corte que
            quer, e não tem problema nenhum. Escolha uma foto aqui, mostre para o
            seu barbeiro e ele adapta ao seu cabelo e ao seu rosto.
          </p>
        </div>

        {/* Grade simples: o catálogo cresce por linha conforme entram fotos. */}
        <div className="mt-10 grid gap-x-4.5 gap-y-9 md:mt-15 md:grid-cols-3">
          {inspirations.map(({ name, image, alt, description }) => (
            <article key={name}>
              <figure className="relative m-0">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-4/5 w-full border border-copper object-cover object-[56%_50%] filter-[saturate(.8)]"
                />
                <PhotoCaption name={name} />
              </figure>
              <p className={`${body} mt-3.5 mb-0 text-ink`}>{description}</p>
            </article>
          ))}
        </div>

        <p className={`${body} mt-10 mb-0 text-ink md:mt-14`}>
          O catálogo está crescendo.{" "}
          <Link
            href="/#agendar"
            className="border-b border-copper text-green-900 transition-colors hover:text-green"
          >
            Fale com a gente
          </Link>{" "}
          se você tem uma referência e quer saber se dá para fazer.
        </p>
      </Section>

      <BookingCTA />
    </>
  );
}
