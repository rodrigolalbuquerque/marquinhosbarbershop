import { label, h2green, heading } from "@/lib/styles";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";

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
      <div className="grid grid-cols-[1.1fr_.85fr_.75fr_.9fr] items-start gap-3.75 max-md:grid-cols-1">
        <img
          src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&w=900&q=85"
          alt="Barbeiro sorrindo em seu espaço de trabalho"
          className="h-87.5 w-full border border-copper object-cover filter-[saturate(.7)] max-md:h-70"
        />
        <img
          src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=85"
          alt="Barbeiro trabalhando"
          className="mt-10.5 h-87.5 w-full border border-copper object-cover filter-[saturate(.7)] max-md:mt-0 max-md:h-70"
        />
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85"
          alt="Interior da barbearia"
          className="h-87.5 w-full border border-copper object-cover filter-[saturate(.7)] max-md:h-70"
        />
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85"
          alt="Cliente na cadeira"
          className="mt-19 h-87.5 w-full border border-copper object-cover filter-[saturate(.7)] max-md:mt-0 max-md:h-70"
        />
      </div>
    </Section>
  );
}
