import { inspirations } from "@/lib/content";
import { label, h2green, heading, sectionPad } from "@/lib/styles";
import { TextLink } from "@/components/TextLink";

export function Inspiration() {
  return (
    <section id="ideia" className={"bg-paper " + sectionPad}>
      <p className={label}>Inspiração</p>
      <div className={heading}>
        <h2 className={h2green}>
          Quer uma ideia
          <br />
          <span className="text-copper">de corte?</span>
        </h2>
        <TextLink href="#ideia">Veja algumas opções</TextLink>
      </div>
      <div className="grid grid-cols-[1.15fr_1fr_1fr] gap-4.5 max-md:grid-cols-1">
        {inspirations.map(([src, alt], i) => (
          <figure
            key={src}
            className={"m-0" + (i === 1 ? " mt-13.75 max-md:mt-0" : "")}
          >
            <img
              src={src}
              alt={alt}
              className="block h-90 w-full border border-copper object-cover filter-[saturate(.8)] max-md:h-70"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
