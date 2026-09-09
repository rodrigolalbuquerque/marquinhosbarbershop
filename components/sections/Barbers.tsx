import { barbers } from "@/lib/content";
import { label, h2green, heading } from "@/lib/styles";
import { Section } from "@/components/Section";
import { SnapStrip } from "@/components/SnapStrip";
import { TextLink } from "@/components/TextLink";
import { PhotoCaption } from "@/components/PhotoCaption";

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
            <PhotoCaption name={name} sub={unit} />
          </figure>
        ))}
      </SnapStrip>
    </Section>
  );
}
