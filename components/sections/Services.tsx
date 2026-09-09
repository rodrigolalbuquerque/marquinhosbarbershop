import { services } from "@/lib/content";
import { label, h2green } from "@/lib/styles";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";

export function Services() {
  return (
    <Section id="servicos" bg="bg-white">
      <p className={label}>O que fazemos</p>
      <div className="mb-8 mt-8 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-5 md:mb-10 md:mt-11">
        <h2 className={h2green}>
          O ofício
          <br />
          <span className="text-copper">bem feito.</span>
        </h2>
        <TextLink href="#servicos">Confira todos os serviços</TextLink>
      </div>
      {/* 2 colunas no mobile: corta a altura pela metade sem virar carrossel. */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-6">
        {services.map(([title, text, image]) => (
          <article key={title}>
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="block aspect-square w-full border border-copper object-cover filter-[saturate(.75)] md:aspect-auto md:h-62.5"
            />
            <div className="pt-2 pb-1 md:pb-4">
              <h3 className="mb-1 mt-0 font-serif text-[19px] font-bold text-green md:text-[25px]">
                {title}
              </h3>
              <p className="m-0 line-clamp-2 text-[13px] leading-[1.45] md:text-[12px] md:leading-[1.5]">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
