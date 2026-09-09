// Tokens de classe compartilhados entre as seções.
// Valores fluidos (clamp) — breakpoints só para mudança de ESTRUTURA, não de tamanho.

// Rótulo em versalete. Mínimo 12px no mobile (legibilidade 40+).
export const label =
  "text-[12px] md:text-[10px] font-bold uppercase tracking-[.18em] text-copper";

// Padding vertical das seções (fundo full-bleed fica no <section>).
export const sectionY = "py-[clamp(56px,10vw,150px)]";

// Container centralizado com largura máxima (conteúdo não estica na tela toda).
export const container =
  "mx-auto w-full max-w-[1360px] px-[clamp(20px,5vw,48px)]";

// Cabeçalho de seção: título à esquerda, link/apoio à direita.
export const heading =
  "flex items-end justify-between mt-8 mb-9 md:mt-11.25 md:mb-15 max-md:flex-col max-md:items-start max-md:gap-5";

// Título verde grande (Sen) das seções.
export const h2green =
  "m-0 font-serif font-bold leading-[.9] tracking-[-.06em] text-green text-[clamp(38px,6vw,86px)]";

// Corpo de texto: nunca abaixo de 16px no mobile.
export const body = "text-[16px] md:text-[15px] leading-[1.7]";
