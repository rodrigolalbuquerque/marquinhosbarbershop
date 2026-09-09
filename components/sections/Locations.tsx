import { units } from "@/lib/content";
import { label, h2green } from "@/lib/styles";
import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { Pin } from "@/components/Pin";

export function Locations() {
  return (
    <Section id="unidades" bg="bg-paper">
      <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-[clamp(40px,6vw,90px)]">
        <div className="max-md:hidden">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1300&q=85"
            alt="Interior acolhedor de uma barbearia"
            loading="lazy"
            decoding="async"
            className="block h-full min-h-75 w-full border border-copper object-cover md:min-h-130"
          />
        </div>
        <div>
          <p className={label}>Onde estamos</p>
          <h2 className={h2green + " mt-4 md:mt-5"}>
            Encontre a Marquinhos
            <br />
            <span className="text-copper">perto de você.</span>
          </h2>
          {/* Linhas altas: alvo de toque confortável (≥56px). */}
          <ul className="m-0 mt-7 list-none p-0 md:mt-10">
            {units.map((item) => (
              <li key={item} className="border-t border-line last:border-b">
                <a
                  href="#agendar"
                  className="flex min-h-14 items-center gap-3.5 px-1.5 py-4 font-sans text-[16px] font-semibold text-ink transition-colors hover:text-green active:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper [&>[aria-hidden]]:text-copper"
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
