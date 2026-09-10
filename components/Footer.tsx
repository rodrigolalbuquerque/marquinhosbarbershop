import { logoFace, units } from "@/lib/content";
import { label, container } from "@/lib/styles";
import { Arrow } from "@/components/Arrow";

const footerLink =
  "flex min-h-11 items-center text-[14px] leading-[1.8] transition-colors hover:text-copper active:text-copper md:min-h-0 md:text-[11px]";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white md:py-13.75">
      <div
        className={`${container} grid gap-8 md:grid-cols-[1.6fr_1fr_1fr] md:items-start md:gap-11.25`}
      >
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoFace}
              alt=""
              className="h-10.5 w-auto object-contain object-left"
            />
            <span className="font-serif text-[18px] font-extrabold leading-none tracking-[-.06em]">
              MARQUINHOS
              <small className="ml-px block font-sans text-[7px] font-semibold leading-[1.5] tracking-[.22em]">
                BARBER SHOP
              </small>
            </span>
          </div>
          <p className="mt-5 text-[13px] leading-[1.8] md:text-[11px]">
            Barba, cabelo e cuidado completo.
            <br />
            Rio de Janeiro, RJ.
          </p>
        </div>

        {/* Unidades: sanfona no mobile — condensa sem esconder do leitor de tela. */}
        <details className="group border-t border-white/15 md:border-0" open>
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between md:min-h-0 md:cursor-default">
            <span className={label}>Unidades</span>
            <span
              aria-hidden="true"
              className="text-copper transition-transform group-open:rotate-180 md:hidden"
            >
              ⌄
            </span>
          </summary>
          <ul className="m-0 list-none p-0 pb-3 md:pb-0">
            {units.map((unit) => (
              <li key={unit}>
                <a href="#unidades" className={footerLink}>
                  {unit}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <div className="border-t border-white/15 pt-4 md:border-0 md:pt-0">
          <p className={label}>História</p>
          <a href="#sobre" className={footerLink}>
            Nossa história <Arrow />
          </a>
        </div>
      </div>
    </footer>
  );
}
