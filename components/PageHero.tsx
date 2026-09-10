import { container, label } from "@/lib/styles";

// Topo das páginas internas. Existe por um motivo estrutural: o Header é
// `absolute` com texto branco, desenhado para viver sobre foto. Sem um hero
// escuro embaixo dele, o menu ficaria invisível sobre o fundo claro.
// Menor que o hero da home — aqui a foto ambienta, não vende.
type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Segunda linha do título, em cobre. */
  accent?: string;
  image: string;
  alt: string;
};

export function PageHero({ eyebrow, title, accent, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex h-[52svh] min-h-[380px] items-end overflow-hidden text-white md:h-[440px] max-md:landscape:min-h-[300px]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,26,18,.92)_8%,rgba(13,26,18,.55)_50%,rgba(13,26,18,.35)_100%)] md:bg-[linear-gradient(180deg,rgba(13,26,18,.8),transparent_30%),linear-gradient(90deg,rgba(13,26,18,.88),rgba(13,26,18,.4)_55%,transparent_90%)]" />
      <div className={`relative w-full pb-10 md:pb-14 ${container}`}>
        <p className={label}>{eyebrow}</p>
        <h1 className="my-3 font-serif text-[clamp(38px,6.5vw,80px)] font-bold leading-[.92] tracking-[-.05em] md:my-4">
          {title}
          {accent && (
            <>
              <br />
              <em className="not-italic text-copper">{accent}</em>
            </>
          )}
        </h1>
      </div>
    </section>
  );
}
