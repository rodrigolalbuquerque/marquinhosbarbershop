// Conteúdo/dados do site (placeholders até entrar o conteúdo real).

export const logoFace = "/logo-face.svg";
export const logoText = "/logo-texto.svg";

// [título, descrição, imagem]
export const services: [string, string, string][] = [
  [
    "Corte",
    "Tesoura, máquina e acabamento preciso.",
    "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&w=1000&q=85",
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

// Catálogo de cortes — universal, não "cortes da casa" (D-030).
// PLACEHOLDER: fotos e nomes provisórios (originais em ../placeholder/inspiração/).
// Vira objeto porque a página /estilos precisa de descrição além do nome.
export type Style = {
  name: string;
  image: string;
  alt: string;
  /** Uma linha: o que define o corte, em linguagem de cliente. */
  description: string;
};

export const inspirations: Style[] = [
  {
    name: "Clássico texturizado",
    image: "/inspiracao/classico-texturizado.jpg",
    alt: "Homem de perfil com corte texturizado no topo e degradê nas laterais",
    description:
      "Volume e movimento no topo, laterais baixas. Discreto o bastante para o trabalho.",
  },
  {
    name: "Barba na navalha",
    image: "/inspiracao/barba-na-navalha.jpg",
    alt: "Homem de perfil com barba cheia e contorno feito na navalha",
    description:
      "Barba cheia com contorno desenhado na navalha. Pede manutenção a cada duas semanas.",
  },
  {
    name: "Degradê navalhado",
    image: "/inspiracao/degrade-navalhado.jpg",
    alt: "Homem de perfil com degradê navalhado e barba alinhada",
    description:
      "Transição da pele ao cabelo sem degrau. É o corte que mais depende da mão do barbeiro.",
  },
];

// Unidades — dados reais de ../context/02-unidades.md (2026-09-10).
// DDD 21 assumido: o dono passou os números com 8 dígitos. Conferir antes de publicar.
// Horários e a unidade Tijuca ainda estão "A PREENCHER" no context.
export type Unit = {
  name: string;
  slug: string;
  /** Bairro — é o que a pessoa reconhece ao procurar "perto de mim". */
  district: string;
  street: string;
  cep: string;
  /** Só dígitos, com país e DDD: formato do link wa.me. */
  whatsapp: string;
  /** Rótulo do WhatsApp para leitura humana. */
  whatsappLabel: string;
  /** "trinks" pode virar agendamento online; "cash" fica no WhatsApp (D-021). */
  system: "trinks" | "cash";
};

export const units: Unit[] = [
  {
    name: "Boulevard",
    slug: "boulevard",
    district: "Vila Isabel",
    street: "R. Barão de São Francisco, 236",
    cep: "20560-030",
    whatsapp: "552134007232",
    whatsappLabel: "(21) 3400-7232",
    system: "cash",
  },
  {
    name: "Nova América",
    slug: "nova-america",
    district: "Del Castilho",
    street: "Av. Pastor Martin Luther King Jr., 126",
    cep: "20754-971",
    whatsapp: "552123033370",
    whatsappLabel: "(21) 2303-3370",
    system: "trinks",
  },
  {
    name: "Norte Shopping",
    slug: "norte-shopping",
    district: "Cachambi",
    street: "Av. Dom Hélder Câmara, 5474 — Loja 825",
    cep: "20771-004",
    whatsapp: "552120182543",
    whatsappLabel: "(21) 2018-2543",
    system: "cash",
  },
  {
    name: "Metropolitano",
    slug: "metropolitano",
    district: "Barra da Tijuca",
    street: "Av. Embaixador Abelardo Bueno, 1300",
    cep: "22775-023",
    whatsapp: "552130959200",
    whatsappLabel: "(21) 3095-9200",
    system: "trinks",
  },
  {
    name: "West Shopping",
    slug: "west-shopping",
    district: "Campo Grande",
    street: "Estr. do Mendanha, 555 — Loja 201 C",
    cep: "23087-959",
    whatsapp: "552134379920",
    whatsappLabel: "(21) 3437-9920",
    system: "cash",
  },
];

/** Link de conversa já com a mensagem pronta. */
export function whatsappLink(unit: Unit, message: string): string {
  return `https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(message)}`;
}

// [nome, unidade, imagem, alt]
// PLACEHOLDER: lista fixa provisória. Por decisão D-032 estes rostos devem ser
// escolhidos automaticamente dentre os barbeiros ativos e publicados, quando a
// camada de dados existir. Nomes fictícios até chegarem os dados reais da equipe
// (ver ../context/09-equipe-e-socios.md — tabela ainda "A PREENCHER").
export const barbers: [string, string, string, string][] = [
  [
    "Caetano Vasques",
    "Nova América",
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&w=900&q=85",
    "Barbeiro sorrindo em seu espaço de trabalho",
  ],
  [
    "Benício Aragão",
    "Metropolitano",
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=85",
    "Barbeiro trabalhando",
  ],
  [
    "Otávio Bandeira",
    "Norte Shopping",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    "Barbeiro no salão da unidade",
  ],
  [
    "Vicente Rezende",
    "Boulevard",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    "Barbeiro finalizando um corte",
  ],
];
