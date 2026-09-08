import { label } from "@/lib/styles";
import { Button } from "@/components/Button";

export function BookingCTA() {
  return (
    <section
      id="agendar"
      className="flex items-center justify-between bg-green px-[clamp(24px,10vw,160px)] py-22.5 text-white max-md:flex-col max-md:items-start max-md:gap-7"
    >
      <div>
        <p className={label}>Pronto para voltar?</p>
        <h2 className="mt-6 font-serif text-[clamp(58px,7vw,96px)] font-bold leading-[.88] tracking-[-.06em]">
          Vamos <em className="not-italic text-copper">marcar?</em>
        </h2>
      </div>
      <Button href="mailto:agenda@marquinhosbarber.com.br">
        Agendar horário
      </Button>
    </section>
  );
}
