import { label, container } from "@/lib/styles";
import { Button } from "@/components/Button";

export function BookingCTA() {
  return (
    <section id="agendar" className="bg-green py-16 text-white md:py-22.5">
      <div
        className={`${container} flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between md:gap-0`}
      >
        <div>
          <p className={label}>Pronto para voltar?</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,7vw,96px)] font-bold leading-[.9] tracking-[-.06em] md:mt-6 md:leading-[.88]">
            Vamos <em className="not-italic text-copper">marcar?</em>
          </h2>
        </div>
        <Button href="mailto:agenda@marquinhosbarber.com.br" full>
          Agendar horário
        </Button>
      </div>
    </section>
  );
}
