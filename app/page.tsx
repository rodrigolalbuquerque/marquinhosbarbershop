"use client";

import { useState } from "react";

const logoUrl = "/logo-rosto.svg";

const inspirations = [
  [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
    "Corte clássico com textura",
  ],
  [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    "Acabamento limpo",
  ],
  [
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
    "Barba bem desenhada",
  ],
];

const services = [
  [
    "Corte",
    "Tesoura, máquina e acabamento preciso.",
    "https://images.unsplash.com/photo-1593702295094-aea3cbb97929?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Barba",
    "Toalha quente e cuidado nos detalhes.",
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Combo",
    "Corte e barba no mesmo ritual.",
    "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Sobrancelha",
    "Acabamento discreto e natural.",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Hidratação",
    "Cuidado extra para cabelo e barba.",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Platinado",
    "Cor, técnica e personalidade.",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85",
  ],
];

const units = [
  "Boulevard",
  "Nova América",
  "Norte Shopping",
  "Metropolitano",
  "West Shopping",
  "Tijuca",
];

const label = "text-[10px] font-bold uppercase tracking-[.18em] text-copper";
const btn =
  "inline-flex items-center gap-[25px] px-5 py-[17px] text-[10px] font-bold uppercase tracking-[.12em] transition-transform hover:-translate-y-[3px]";
const textLink =
  "inline-flex items-center gap-[22px] border-b border-copper pb-[9px] text-[10px] font-bold uppercase tracking-[.08em]";
const sectionPad = "px-[clamp(24px,10vw,160px)] py-[clamp(78px,10vw,150px)]";
const heading =
  "flex items-end justify-between mt-[45px] mb-[60px] max-md:flex-col max-md:items-start max-md:gap-7";
const h2green =
  "m-0 font-serif font-bold leading-[.88] tracking-[-.06em] text-green text-[clamp(48px,6vw,86px)]";
const brand = (
  <>
    <img
      src={logoUrl}
      alt=""
      className="h-20 w-20 object-contain object-left"
    />
    <span className="font-serif text-[20px] font-extrabold leading-none tracking-[-.06em]">
      MARQUINHOS
      <small className="ml-px block font-sans text-[8px] font-semibold leading-[1.5] tracking-[.22em]">
        BARBER SHOP
      </small>
    </span>
  </>
);

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Pin() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const navLink = "transition-colors hover:text-copper";

  return (
    <main className="overflow-hidden">
      <header className="absolute z-10 flex h-24 w-full items-center justify-between px-[clamp(24px,6vw,92px)] text-white [text-shadow:0_1px_16px_rgba(0,0,0,.65)] max-md:h-[76px]">
        <a
          href="#inicio"
          className="flex items-center gap-2.5"
          aria-label="Marquinhos Barber Shop, início"
        >
          {brand}
        </a>
        <nav
          aria-label="Navegação principal"
          className={
            "flex items-center gap-[clamp(18px,2.8vw,40px)] text-[12px] font-bold uppercase tracking-[.06em] max-md:absolute max-md:left-0 max-md:top-0 max-md:w-full max-md:flex-col max-md:items-start max-md:gap-6 max-md:bg-green max-md:px-6 max-md:pb-[35px] max-md:pt-[100px] " +
            (menuOpen ? "max-md:flex" : "max-md:hidden")
          }
        >
          <a href="#servicos" onClick={close} className={navLink}>
            Serviços e preços
          </a>
          <a href="#barbeiros" onClick={close} className={navLink}>
            Barbeiros
          </a>
          <a href="#unidades" onClick={close} className={navLink}>
            Unidades
          </a>
          <a href="#sobre" onClick={close} className={navLink}>
            Sobre
          </a>
          <a href="#agendar" onClick={close} className={navLink}>
            Já sou cliente
          </a>
          <a
            href="#agendar"
            onClick={close}
            className="border border-copper px-[17px] py-[13px] text-copper transition-colors hover:bg-copper hover:text-white"
          >
            Agendar <Arrow />
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          className="relative z-[3] hidden gap-[5px] border-0 bg-transparent p-2 max-md:grid"
        >
          <span className="block h-px w-[25px] bg-white" />
          <span className="block h-px w-[25px] bg-white" />
        </button>
      </header>

      <section
        id="inicio"
        className="relative h-[min(860px,100vh)] min-h-[650px] overflow-hidden text-white max-md:min-h-[700px]"
      >
        <img
          className="absolute h-full w-full object-cover object-center max-md:object-[63%_center]"
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2200&q=90"
          alt="Barbeiro cuidando da barba de um cliente em uma barbearia"
        />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(13,26,18,.82),transparent_28%),linear-gradient(90deg,rgba(13,26,18,.9),rgba(13,26,18,.42)_48%,transparent_85%)]" />
        <div className="absolute left-[clamp(24px,10vw,155px)] top-[39%] max-md:top-[33%]">
          <p className={label}>Desde 1992 · Rio de Janeiro</p>
          <h1 className="my-[22px] font-serif text-[clamp(52px,7.5vw,116px)] font-bold leading-[.88] tracking-[-.06em] max-md:text-[62px]">
            Barba, cabelo
            <br />
            <em className="not-italic text-copper">e chopp gelado.</em>
          </h1>
          <p className="my-[30px] text-[15px] leading-[1.6]">
            Tradição, conversa boa e o cuidado de sempre.
          </p>
          <a href="#agendar" className={btn + " bg-copper text-white"}>
            Agendar <Arrow />
          </a>
        </div>
        <span className="absolute bottom-[60px] right-[10vw] rounded-full border border-copper px-[13px] py-[18px] text-center font-sans text-[8px] font-semibold leading-[1.2] tracking-[.12em] text-copper max-md:bottom-[30px] max-md:right-6">
          DESDE
          <br />
          <strong className="font-serif text-[22px] tracking-normal">
            1992
          </strong>
        </span>
      </section>

      <section id="servicos" className={"bg-warm " + sectionPad}>
        <p className={label}>O que fazemos</p>
        <div className={heading}>
          <h2 className={h2green}>
            O ofício
            <br />
            <span className="text-copper">bem feito.</span>
          </h2>
          <p className="max-w-[250px] text-[13px] leading-[1.7]">
            Corte, barba e extras para sair se sentindo bem cuidado.
          </p>
        </div>
        <div className="mb-[38px] grid grid-cols-3 gap-[17px] max-md:grid-cols-1">
          {services.map(([title, text, image]) => (
            <article key={title} className="border border-copper bg-paper">
              <img
                src={image}
                alt={title}
                className="block h-[250px] w-full object-cover [filter:saturate(.75)]"
              />
              <div className="px-5 pb-[23px] pt-[19px]">
                <h3 className="mb-2 mt-0 font-serif text-[25px] font-bold text-green">
                  {title}
                </h3>
                <p className="m-0 text-[12px] leading-[1.5]">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <a href="#unidades" className={textLink}>
          Ver preços da sua unidade <Arrow />
        </a>
      </section>

      <section id="barbeiros" className={"bg-paper " + sectionPad}>
        <p className={label}>Nossos barbeiros</p>
        <div className={heading}>
          <h2 className={h2green}>
            Experiência
            <br />
            <span className="text-copper">que se nota.</span>
          </h2>
          <div>
            <p className="max-w-[300px] text-[14px] leading-[1.8]">
              Gente que conhece o ofício, escuta o cliente e respeita cada
              detalhe.
            </p>
            <a href="#agendar" className={textLink}>
              Ver todos <Arrow />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[1.1fr_.85fr_.75fr_.9fr] items-start gap-[15px] max-md:grid-cols-1">
          <img
            src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&w=900&q=85"
            alt="Barbeiro sorrindo em seu espaço de trabalho"
            className="h-[350px] w-full border border-copper object-cover [filter:saturate(.7)] max-md:h-[280px]"
          />
          <img
            src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=85"
            alt="Barbeiro trabalhando"
            className="mt-[42px] h-[350px] w-full border border-copper object-cover [filter:saturate(.7)] max-md:mt-0 max-md:h-[280px]"
          />
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85"
            alt="Interior da barbearia"
            className="h-[350px] w-full border border-copper object-cover [filter:saturate(.7)] max-md:h-[280px]"
          />
          <img
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85"
            alt="Cliente na cadeira"
            className="mt-[76px] h-[350px] w-full border border-copper object-cover [filter:saturate(.7)] max-md:mt-0 max-md:h-[280px]"
          />
        </div>
      </section>

      <section id="ideia" className={"bg-paper " + sectionPad}>
        <p className={label}>Inspiração</p>
        <div className={heading}>
          <h2 className={h2green}>
            Quer uma ideia
            <br />
            <span className="text-copper">de corte?</span>
          </h2>
          <p className="max-w-[250px] text-[13px] leading-[1.7]">
            Não sabe o nome? Aponte para a foto. A gente entende.
          </p>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr_1fr] gap-[18px] max-md:grid-cols-1">
          {inspirations.map(([src, alt], i) => (
            <figure
              key={src}
              className={"m-0" + (i === 1 ? " mt-[55px] max-md:mt-0" : "")}
            >
              <img
                src={src}
                alt={alt}
                className="block h-[360px] w-full border border-copper object-cover [filter:saturate(.8)] max-md:h-[280px]"
              />
              <figcaption className="flex items-center justify-between py-[17px] text-[11px] font-bold tracking-[.03em] [&>[aria-hidden]]:text-[16px] [&>[aria-hidden]]:text-copper">
                {alt}
                <Arrow />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="clube"
        className={
          "relative min-h-[590px] overflow-hidden bg-green text-white " +
          sectionPad
        }
      >
        <img
          src={logoUrl}
          alt=""
          className="absolute bottom-[-18%] right-[-3%] w-[58%] max-w-[720px] opacity-[.18] [filter:grayscale(1)_sepia(.35)] [mix-blend-mode:screen] max-md:bottom-[-1%] max-md:right-[-27%] max-md:w-[110%]"
        />
        <div className="relative z-[2]">
          <p className={label}>Para quem volta</p>
          <h2 className="mb-[26px] mt-[42px] font-serif text-[clamp(65px,9vw,130px)] font-bold leading-[.88] tracking-[-.06em]">
            Clube
            <br />
            <em className="not-italic text-copper">Marquinhos.</em>
          </h2>
          <p className="max-w-[330px] text-[15px] leading-[1.8]">
            Seu cuidado em dia, com benefícios e prioridade para você voltar
            sempre.
          </p>
          <a href="#agendar" className={btn + " bg-paper text-green"}>
            Saiba mais <Arrow />
          </a>
        </div>
      </section>

      <section id="unidades" className={"bg-paper " + sectionPad}>
        <div className="grid grid-cols-2 items-stretch gap-[clamp(40px,6vw,90px)] max-md:grid-cols-1">
          <div className="max-md:order-2">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1300&q=85"
              alt="Interior acolhedor de uma barbearia"
              className="block h-full min-h-[520px] w-full border border-copper object-cover max-md:min-h-[300px]"
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
                    className="flex items-center gap-[14px] px-[6px] py-[22px] font-sans text-[16px] font-semibold text-ink transition-colors hover:text-green [&>[aria-hidden]]:text-copper"
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
      </section>

      <section
        id="agendar"
        className="flex items-center justify-between bg-green px-[clamp(24px,10vw,160px)] py-[90px] text-white max-md:flex-col max-md:items-start max-md:gap-7"
      >
        <div>
          <p className={label}>Pronto para voltar?</p>
          <h2 className="mt-6 font-serif text-[clamp(58px,7vw,96px)] font-bold leading-[.88] tracking-[-.06em]">
            Vamos <em className="not-italic text-copper">marcar?</em>
          </h2>
        </div>
        <a
          href="mailto:agenda@marquinhosbarber.com.br"
          className={btn + " bg-copper text-white"}
        >
          Agendar horário <Arrow />
        </a>
      </section>

      <footer className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-start gap-[45px] bg-ink px-[clamp(24px,6vw,92px)] py-[55px] text-white max-md:grid-cols-2">
        <div className="max-md:col-span-2">
          <div className="flex items-center gap-[10px]">
            <img
              src={logoUrl}
              alt=""
              className="h-[38px] w-[38px] object-contain object-left"
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
          <p className="mt-3 inline-block border border-copper px-[9px] py-[11px] text-[9px] tracking-[.1em] text-copper">
            DESDE 1992
          </p>
        </div>
      </footer>
    </main>
  );
}
