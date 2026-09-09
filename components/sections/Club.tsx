import { logoFace } from "@/lib/content";
import { label, sectionY, container } from "@/lib/styles";
import { Button } from "@/components/Button";

export function Club() {
  return (
    <section id="clube" className={`bg-green text-white ${sectionY}`}>
      <div
        className={`${container} relative overflow-hidden max-md:min-h-0 md:min-h-147.5`}
      >
        {/* Desktop: marca d'água à direita. Mobile: textura atrás do texto. */}
        <img
          src={logoFace}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute top-1/2 w-[46%] max-w-135 -translate-y-1/2 opacity-[.18] filter-[grayscale(1)_sepia(.35)] mix-blend-screen max-md:left-1/2 max-md:w-[130%] max-md:max-w-none max-md:-translate-x-1/2 max-md:opacity-[.10] md:right-0"
        />
        <div className="relative z-2">
          <p className={label}>Para quem volta</p>
          <h2 className="mb-5 mt-6 font-serif text-[clamp(52px,9vw,130px)] font-bold leading-[.9] tracking-[-.06em] md:mb-6.5 md:mt-10.5 md:leading-[.88]">
            Clube
            <br />
            <em className="not-italic text-copper">Marquinhos.</em>
          </h2>
          <p className="max-w-82.5 text-[16px] leading-[1.7] md:text-[15px] md:leading-[1.8]">
            Seu cuidado sempre em dia, por um preço fixo no mês, com direito a
            vantagens exclusivas.
          </p>
          <Button href="#agendar" variant="light" full className="mt-7">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}
