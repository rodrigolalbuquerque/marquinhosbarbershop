import { label } from "@/lib/styles";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[min(860px,100vh)] min-h-162.5 overflow-hidden text-white max-md:min-h-175"
    >
      <img
        className="absolute h-full w-full object-cover object-center max-md:object-[63%_center]"
        src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2200&q=90"
        alt="Barbeiro cuidando da barba de um cliente em uma barbearia"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,18,.82),transparent_28%),linear-gradient(90deg,rgba(13,26,18,.9),rgba(13,26,18,.42)_48%,transparent_85%)]" />
      <div className="absolute left-[clamp(24px,10vw,155px)] top-[39%] max-md:top-[33%]">
        <p className={label}>Desde 1992 · Rio de Janeiro</p>
        <h1 className="my-5.5 font-serif text-[clamp(52px,7.5vw,116px)] font-bold leading-[.88] tracking-[-.06em] max-md:text-[62px]">
          Barba, cabelo
          <br />
          <em className="not-italic text-copper">e chopp gelado.</em>
        </h1>
        <p className="my-7.5 text-[15px] leading-[1.6]">
          Tradição, conversa boa e o cuidado de sempre.
        </p>
        <Button href="#agendar">Agendar</Button>
      </div>
      <span className="absolute bottom-15 right-[10vw] rounded-full border border-copper px-3.25 py-4.5 text-center font-sans text-[8px] font-semibold leading-[1.2] tracking-[.12em] text-copper max-md:bottom-7.5 max-md:right-6">
        DESDE
        <br />
        <strong className="font-serif text-[22px] tracking-normal">1992</strong>
      </span>
    </section>
  );
}
