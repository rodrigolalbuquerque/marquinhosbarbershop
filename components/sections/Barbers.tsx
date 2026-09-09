import { barbers } from "@/lib/content";
import { label, h2green, heading } from "@/lib/styles";
import { Section } from "@/components/Section";
import { SnapStrip } from "@/components/SnapStrip";
import { TextLink } from "@/components/TextLink";

const shot =
  "block aspect-4/5 w-full border border-copper object-cover filter-[saturate(.7)] md:aspect-auto md:h-87.5";

// Escalonamento da grade no desktop (o mobile é tira lateral, sem offset).
const offset = ["", "md:mt-10.5", "", "md:mt-19"];

export function Barbers() {
  return (
    <Section id="barbeiros" bg="bg-warm">
      <p className={label}>Nossos barbeiros</p>
      <div className={heading}>
        <h2 className={h2green}>
          Experiência
          <br />
          <span className="text-copper">que se nota.</span>
        </h2>
        <TextLink href="#barbeiros">Conheça nossa equipe</TextLink>
      </div>
      {/* Vitrine: tira lateral no mobile, grade escalonada no desktop. */}
      <SnapStrip className="md:grid md:grid-cols-[1.1fr_.85fr_.75fr_.9fr] md:items-start md:gap-3.75">
        {barbers.map(([name, unit, src, alt], i) => (
          <figure key={name} className={`relative m-0 ${offset[i] ?? ""}`}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={shot}
            />
            {/* Véu de baixo para cima: mantém o nome legível sobre qualquer foto. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-px bottom-px h-2/5 bg-linear-to-t from-black/80 via-black/35 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 text-white md:px-3.5 md:pb-3.5">
              <p className="m-0 font-serif text-[19px] font-bold leading-tight tracking-[-.03em] md:text-[17px]">
                {name}
              </p>
              <p className="m-0 mt-1 text-[11px] font-bold uppercase tracking-[.18em] text-copper md:text-[10px]">
                {unit}
              </p>
            </figcaption>
          </figure>
        ))}
      </SnapStrip>
    </Section>
  );
}
