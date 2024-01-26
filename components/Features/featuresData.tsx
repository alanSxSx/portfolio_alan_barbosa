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
    icon: "/images/icon/icon-01.svg",
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
    icon: "/images/icon/icon-04.svg",
    title: "Sanity Blog and Docs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "DB, Auth and Stripe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Regular Free Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
];

export default featuresData;
