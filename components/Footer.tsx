import { logoFace, units } from "@/lib/content";
import { label, container } from "@/lib/styles";
import { Arrow } from "@/components/Arrow";

export function Footer() {
  return (
    <footer className="bg-ink py-13.75 text-white">
      <div
        className={`${container} grid grid-cols-[1.4fr_1fr_1fr_1fr] items-start gap-11.25 max-md:grid-cols-2`}
      >
        <div className="max-md:col-span-2">
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
          <p className="mt-5 text-[11px] leading-[1.8]">
            Barba, cabelo e chopp gelado.
            <br />
            Rio de Janeiro, RJ.
          </p>
        </div>
        <div>
          <p className={label}>Unidades</p>
          <p className="text-[11px] leading-[1.8]">
            {units.slice(0, 3).join(" · ")}
            <br />
            {units.slice(3).join(" · ")}
          </p>
        </div>
        <div>
          <p className={label}>Contato</p>
          <p className="text-[11px] leading-[1.8]">
            WhatsApp
            <br />
            Instagram
          </p>
        </div>
        <div>
          <p className={label}>História</p>
          <a href="#sobre" className="text-[11px] leading-[1.8]">
            Nossa história <Arrow />
          </a>
        </div>
      </div>
    </footer>
  );
}
