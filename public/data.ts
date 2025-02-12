export const dataAbout = [
    {
      title: "Testes de Formulários",
      paragraph:
        "Testes utilizando Cypress em um front end",
      arraySkills: ["Next JS", "Cypress", "Javascript", "Teste E2E"],
      image: "/images/cypress.gif",
      link: "https://github.com/alanSxSx/testedeinterface",
      sizeImg: {
        width: 668,
        height: 401,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/testes/cypress.png",
        titles: ["Problema", "Execução", "Resultado"],
        texts: [
          "O candidato deve escrever um teste automatizado para um formulário de cadastro de usuário, validando os seguintes requisitos: O formulário não deve permitir envio sem preencher todos os campos. A senha deve ter mínimo 8 caracteres, 1 letra maiúscula e 1 número. O e-mail digitado no campo Confirmação de E-mail deve ser igual ao e-mail principal.",
          "Automatizar o fluxo de testes do formulário de cadastro utilizando Cypress. Simular diferentes cenários, como tentativa de envio com campos vazios, inserção de senha inválida e divergência entre e-mails. Validar as mensagens de erro exibidas e garantir que as regras de negócio estão sendo aplicadas corretamente.",
          "Todos os testes foram executados com sucesso, garantindo que as regras de validação do formulário de cadastro estão funcionando corretamente. Nenhum bug foi identificado durante os testes.",
        ],
      },
    },

    {
      title: "Testes de API",
      paragraph: "Aplicação utilizada pra teste de API com Jest + Supertest",
      arraySkills: ["NodeJS", "Jest","Supertest","Typescript", "APITest"],
      image: "/images/jest.gif",
      link: "https://github.com/alanSxSx/testeDeAPI",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/testes/jest.png",
        titles: ["Problema", "Execução", "Resultado"],
        texts: [
        "Garantir a integridade e confiabilidade das respostas da API.",
        "Desenvolvimento de testes automatizados utilizando Jest e Supertest, validando rotas, respostas e integração com banco de dados.",
        "Os testes automatizados permitiram detectar falhas rapidamente e assegurar a qualidade da API antes da implantação.",
        ],
      },
    },

		{
      title: "Testes de Carga",
      paragraph: "Aplicação utilizada para teste de carga em uma API utilizando o K6.",
      arraySkills: ["K6", "Teste de Carga","APITests"],
      image: "/images/k6.gif",
      link: "https://github.com/alanSxSx/testeDeAPI",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/testes/k6.png",
        titles: ["Problema", "Execução", "Resultado"],
        texts: [
					"Avaliar a performance e escalabilidade da API sob alta demanda.",
					"Execução de testes de carga utilizando K6 para simular múltiplos usuários simultâneos e medir o tempo de resposta da API.",
					"Os testes ajudaram a identificar gargalos de desempenho, permitindo otimizações antes do lançamento para garantir uma API robusta.",
        ],
      },
    },

    {
      title: "Testes Unitários",
      paragraph: "Automação de testes unitários para validar funções e componentes do front-end utilizando Jest e React Testing Library.",
      arraySkills: ["ReactJS", "NextJS","TypeScript","Jest","React Testing Library",],
      image: "/images/unitario.gif",
      link: "https://github.com/alanSxSx/pomodoro-app",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "2/1",
      moreDetails: {
        image: "/images/testes/unitario.png",
        titles: ["Problema", "Execução", "Resultado"],
        texts: [
					"Garantir que funções e componentes críticos do front-end se comportem conforme o esperado.",
          "Desenvolvimento de testes unitários com Jest e React Testing Library para validar comportamento de componentes e funções isoladas.",
          "Os testes unitários ajudaram a prevenir regressões e assegurar a confiabilidade do código antes da implantação.",
        ],
      },
    },


  ];

