import { units } from "@/lib/content";
import { label, h2green } from "@/lib/styles";
import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { Pin } from "@/components/Pin";

export function Locations() {
  return (
    <Section id="unidades" bg="bg-paper">
      <div className="grid grid-cols-2 items-stretch gap-[clamp(40px,6vw,90px)] max-md:grid-cols-1">
        <div className="max-md:order-2">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1300&q=85"
            alt="Interior acolhedor de uma barbearia"
            className="block h-full min-h-130 w-full border border-copper object-cover max-md:min-h-75"
          />
        </div>
        <div className="max-md:order-1">
          <p className={label}>Onde estamos</p>
          <h2 className={h2green + " mt-5"}>
            Encontre a Marquinhos
            <br />
            <span className="text-copper">perto de você.</span>
          </h2>
          <ul className="m-0 mt-10 list-none p-0">
            {units.map((item) => (
              <li key={item} className="border-t border-line last:border-b">
                <a
                  href="#agendar"
                  className="flex items-center gap-3.5 px-1.5 py-5.5 font-sans text-[16px] font-semibold text-ink transition-colors hover:text-green [&>[aria-hidden]]:text-copper"
                >
                  <Pin />
                  <span className="flex-1">{item}</span>
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
