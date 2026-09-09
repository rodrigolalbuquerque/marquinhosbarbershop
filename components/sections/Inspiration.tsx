import { inspirations } from "@/lib/content";
import { label, h2green, heading } from "@/lib/styles";
import { Section } from "@/components/Section";
import { SnapStrip } from "@/components/SnapStrip";
import { TextLink } from "@/components/TextLink";
import { PhotoCaption } from "@/components/PhotoCaption";

export function Inspiration() {
  return (
    <Section id="ideia" bg="bg-paper">
      <p className={label}>Inspiração</p>
      <div className={heading}>
        <h2 className={h2green}>
          Quer uma ideia
          <br />
          <span className="text-copper">de corte?</span>
        </h2>
        <TextLink href="#ideia">Veja algumas opções</TextLink>
      </div>
      {/* Vitrine: tira lateral no mobile, grade escalonada no desktop. */}
      <SnapStrip className="md:grid md:grid-cols-[1.15fr_1fr_1fr] md:items-start md:gap-4.5">
        {inspirations.map(([name, src, alt], i) => (
          <figure
            key={name}
            className={"relative m-0" + (i === 1 ? " md:mt-13.75" : "")}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="block aspect-4/5 w-full border border-copper object-cover object-[56%_50%] filter-[saturate(.8)] md:aspect-auto md:h-90 md:object-[68%_50%]"
            />
            <PhotoCaption name={name} />
          </figure>
        ))}
      </SnapStrip>
    </Section>
  );
}
