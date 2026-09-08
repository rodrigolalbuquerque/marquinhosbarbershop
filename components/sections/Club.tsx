import { logoFace } from "@/lib/content";
import { label, sectionY, container } from "@/lib/styles";
import { Button } from "@/components/Button";

export function Club() {
  return (
    <section id="clube" className={`bg-green text-white ${sectionY}`}>
      <div className={`${container} relative min-h-147.5 overflow-hidden`}>
        <img
          src={logoFace}
          alt=""
          className="absolute right-0 top-1/2 w-[46%] max-w-135 -translate-y-1/2 opacity-[.18] filter-[grayscale(1)_sepia(.35)] mix-blend-screen max-md:right-[-12%] max-md:w-[80%]"
        />
        <div className="relative z-2">
          <p className={label}>Para quem volta</p>
          <h2 className="mb-6.5 mt-10.5 font-serif text-[clamp(65px,9vw,130px)] font-bold leading-[.88] tracking-[-.06em]">
            Clube
            <br />
            <em className="not-italic text-copper">Marquinhos.</em>
          </h2>
          <p className="max-w-82.5 text-[15px] leading-[1.8]">
            Seu cuidado sempre em dia, por um preço fixo no mês, com direito a
            vantagens exclusivas.
          </p>
          <Button href="#agendar" variant="light" className="mt-7">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}
