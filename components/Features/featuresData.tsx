import { Feature } from "@/types/feature";

function age(date: { getFullYear: () => number; getMonth: () => number; getDate: () => number }) {
  const today = new Date();
  const age =
    today.getFullYear() -
    date.getFullYear() -
    Number(today.getMonth() < date.getMonth() || (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
  return age;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/balance.svg",
    title: "Ética & Responsabilidade",
    description:
      `Nas empresas em que atuo, destaco-me pelos critérios de pontualidade, respeito e educação. Ponto baseados em feedbacks recebido de funcionários das empresas.`,
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Qualificação",
    description:
      "Ativo no ramo da tecnologia desde os 15 anos, concluí o curso técnico de informática pelo programa PEP do Governo de Minas Gerais. Aos 17 anos, iniciei a faculdade de Sistemas de Informação, concluída em 2020.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Experiência",
    description:
      `Com uma experiência consolidada de mais de ${age(new Date(2015, 1, 1))} anos, tenho desempenhado funções no ramo da Tecnologia em renomadas empresas dos setores de saúde e manufatura, ambas contando com um quadro de mais de 130 colaboradores.`,
  },
  {
    id: 4,
    icon: "/images/icon/psychology.svg",
    title: "Inteligencia Emocional",
    description:
      "Recebo feedbacks de maneira positiva e estou aberto a ajustes quando necessário. Sou comprometido com a equipe e busco sempre melhorar. Tenho maturidade para resolver qualquer tipo de problema referente a minha pessoa e situação.",
  },
  {
    id: 5,
    icon: "/images/icon/group.svg",
    title: "Trabalho em Equipe",
    description:
      "Procuro trabalhar em harmonia com colegas, estagiários e gerentes.  Atualmente, mantenho uma abordagem colaborativa ao interagir com meu líder e colegas de outros setores, buscando sempre promover um ambiente de trabalho cooperativo e eficiente.",
  },
  {
    id: 6,
    icon: "/images/icon/comunication.svg",
    title: "Comunicação assertiva",
    description:
      "Ao interagir com colegas de trabalho, mantenho uma postura educada e atenciosa, buscando estabelecer um ambiente de colaboração positivo. Além disso, tenho o compromisso de contextualizar de forma clara e acessível qualquer problema discutido, simplificando questões técnicas para garantir o entendimento.",
  },
];

export default featuresData;
