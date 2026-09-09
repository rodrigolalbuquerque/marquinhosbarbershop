// Legenda sobre foto: véu degradê + texto, para o nome ficar legível
// em qualquer imagem. Usada nas vitrines de Barbeiros e Inspiração.
// O elemento pai precisa ser `relative`.
type PhotoCaptionProps = {
  name: string;
  /** Linha secundária opcional (ex.: unidade do barbeiro). */
  sub?: string;
};

export function PhotoCaption({ name, sub }: PhotoCaptionProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-px bottom-px h-2/5 bg-linear-to-t from-black/80 via-black/35 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 text-white md:px-3.5 md:pb-3.5">
        <p className="m-0 font-serif text-[19px] font-bold leading-tight tracking-[-.03em] md:text-[17px]">
          {name}
        </p>
        {sub && (
          <p className="m-0 mt-1 text-[11px] font-bold uppercase tracking-[.18em] text-copper md:text-[10px]">
            {sub}
          </p>
        )}
      </figcaption>
    </>
  );
}
