import { services } from "@/lib/content";
import { label, h2green } from "@/lib/styles";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";

export function Services() {
  return (
    <Section id="servicos" bg="bg-white">
      <p className={label}>O que fazemos</p>
      <div className="mb-10 mt-11 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-5">
        <h2 className={h2green}>
          O ofício
          <br />
          <span className="text-copper">bem feito.</span>
        </h2>
        <TextLink href="#servicos">Confira todos os serviços</TextLink>
      </div>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {services.map(([title, text, image]) => (
          <article key={title}>
            <img
              src={image}
              alt={title}
              className="block h-62.5 w-full border border-copper object-cover filter-[saturate(.75)]"
            />
            <div className="pt-2 pb-4">
              <h3 className="mb-1 mt-0 font-serif text-[25px] font-bold text-green">
                {title}
              </h3>
              <p className="m-0 text-[12px] leading-[1.5]">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
