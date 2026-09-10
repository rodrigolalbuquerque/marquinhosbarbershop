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

export const units: string[] = [
  "Boulevard",
  "Nova América",
  "Norte Shopping",
  "Metropolitano",
  "West Shopping",
  "Tijuca",
];

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
