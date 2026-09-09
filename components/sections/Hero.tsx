import { label, container } from "@/lib/styles";
import { Button } from "@/components/Button";

const heroBase =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[78svh] min-h-[520px] items-end overflow-hidden text-white md:h-[min(860px,100vh)] md:min-h-162.5 md:items-center max-md:landscape:min-h-[420px]"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
        src={`${heroBase}&w=2200&q=90`}
        srcSet={`${heroBase}&w=800&q=80 800w, ${heroBase}&w=1400&q=85 1400w, ${heroBase}&w=2200&q=90 2200w`}
        sizes="100vw"
        alt="Barbeiro cuidando da barba de um cliente em uma barbearia"
        fetchPriority="high"
        decoding="async"
      />
      {/* Scrim: de baixo pra cima no mobile (texto ancorado embaixo);
          da esquerda no desktop (texto à esquerda). */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,26,18,.92)_8%,rgba(13,26,18,.5)_45%,rgba(13,26,18,.28)_100%)] md:bg-[linear-gradient(180deg,rgba(13,26,18,.82),transparent_28%),linear-gradient(90deg,rgba(13,26,18,.9),rgba(13,26,18,.42)_48%,transparent_85%)]" />

      <div className={`relative w-full pb-12 md:pb-0 ${container}`}>
        <div>
          <p className={label}>Desde 1992 · Rio de Janeiro</p>
          <h1 className="my-4 font-serif text-[clamp(44px,8vw,116px)] font-bold leading-[.9] tracking-[-.06em] md:my-5.5 md:leading-[.88]">
            Barba, cabelo
            <br />
            <em className="not-italic text-copper">e chopp gelado.</em>
          </h1>
          <p className="mb-7 max-w-[46ch] text-[16px] leading-[1.6] md:my-7.5 md:text-[15px]">
            Tradição, conversa boa e o cuidado de sempre.
          </p>
          <Button href="#agendar" full>
            Agendar
          </Button>
        </div>
      </div>

      {/* Selo grande é decoração de desktop — no mobile o "Desde 1992" vive no rótulo. */}
      <span className="absolute bottom-15 right-[10vw] hidden rounded-full border border-copper px-3.25 py-4.5 text-center font-sans text-[8px] font-semibold leading-[1.2] tracking-[.12em] text-copper md:block">
        DESDE
        <br />
        <strong className="font-serif text-[22px] tracking-normal">1992</strong>
      </span>
    </section>
  );
}
