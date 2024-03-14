export const dataAbout = [
    {
      title: "Site Fulig",
      paragraph:
        "Desenvolvimento de um novo site para empresa, FULIG - Fundição de Ligas LTDA ",
      arraySkills: ["React JS", "Next JS", "Netlify Forms", "Prime React", "CSS Modules"],
      image: "/images/fulig/fulig1.jpeg",
      link: "https://fulig.netlify.app/",
      sizeImg: {
        width: 668,
        height: 401,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/fulig/fulig2.jpeg",
        titles: ["Problema", "Atuação", "Benefícios"],
        texts: [
          "Empresa estava sem um site que pudesse conter a história e a gradeza da FULIG.",
          "Foi feito o desenvolvimento de um protótipo e apresentado para Diretoria, que logo elogiou muito a iniciativa.",
          "Com a implementação do site, a FULIG ganhou um local para eternizar sua história e conseguiu um espaço para apresentar seus produtos e serviços.",
        ],
      },
    },

    {
      title: "Registro de Almoço",
      paragraph: "Aplicação utilizada pra todos os funcionários realizarem o registro de almoço diário",
      arraySkills: ["ReactJS", "Axios","Prime React","Token JWT","Secure Local Storage","Clound Computing"],
      image: "/images/registro_almoco/reg1.jpeg",
      link: "https://registrodealmoco.netlify.app/",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/registro_almoco/reg2.jpeg",
        titles: ["Problema", "Atuação", "Benefícios"],
        texts: [
          "O registro de almoço éra feito em uma lista de papel totalmente de forma manual, gerando muito trabalho.",
          "Fiz toda a aplicação desde o front-end até o backend. A implementação do backend foi feita em Clound na Digital Ocean.",
          "Reduziu drasticamente o tempo de conferência dos almoços. A empresa também terá os dados referentes ao registro de almoço para os funcionários.",
        ],
      },
    },

		{
      title: "API Backend",
      paragraph: "Parte de Backend do projeto de registro de almoço.",
      arraySkills: ["JavaScript", "NodeJS","Autenticação de rotas com JWT","Sequelize","Conexão com banco Mysql"],
      image: "/images/fuligbackend/backend1.png",
      link: "https://github.com/alanSxSx/registro_de_almoco_backend",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "5/3",
      moreDetails: {
        image: "/images/fuligbackend/backend2.png",
        titles: ["Problema", "Atuação", "Benefícios"],
        texts: [
          "Com o uso do papel, as informações não éram armazenadas de maneira eficiente.",
          "Desenvolvimento da parte backend com sucesso, sendo implementado as rotas e a conexão com Banco de Dados.",
          "Armazena e altera as informações de forma íntegra, sem muito esforço da administração do sistema.",
        ],
      },
    },

    {
      title: "App Authentication",
      paragraph: "Esse aplicativo faz a autenticação do usuário usando uma chave JWT e redireciona para estrutura de páginas de acordo com o nível de acesso informado. Foi construído com NextJS e Typescript.",
      arraySkills: ["ReactJS", "NextJS","TypeScript","JWT","NextAuth",],
      image: "/images/nextAuth/authentic.png",
      link: "https://github.com/alanSxSx/projnextauth",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "2/1",
      moreDetails: {
        image: "/images/nextAuth/authenticAuth.png",
        titles: ["Objetivo", "Aprendizado", "Desafios do Projeto"],
        texts: [
          "Desenvolver minhas habilidades em Typescript, aproveitando o gerenciador de projetos do nextJS.",
          "Com o NextAuth, aprendi a realizar de forma simples a authenticação via API própria e conhecer a authenticação via outros providers como GitHub.",
          "Os maiores desafios do projeto foram armazenar os dados do usuário de forma segura, e direcionar de acordo com seu nível de acesso.",
        ],
      },
    },

		{
      title: "To do List",
      paragraph: "To do List, também conhecida como Lista de Tarefas, oferece uma maneira eficiente de priorizar e acompanhar as tarefas pendentes.",
      arraySkills: ["ReactJS","CSS","JavaScript","HTML","CRUD em API","Axios","Redux"],
      image: "/images/todoList/todo1.png",
      link: "https://github.com/alanSxSx/to-do-list",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "2/1",
      moreDetails: {
        image: "/images/todoList/todo2.png",
        titles: ["Objetivo", "Aprendizado", "Desafios do Projeto"],
        texts: [
          "Trabalhar os conceitos de CRUD em API, utilizando também o estado global REDUX.",
          "Aprendi a trabalhar melhor com API utilizando tanto o AXIOS quanto o FETCH. Também optei pelo estado global para desenvolver melhor o entendimento. ",
          "Usar o redux principalmente em um projeto menor é mais trabalhoso do que o useState.",
        ],
      },
    },

		{
      title: "Projeto Costs",
      paragraph: "Costs foi um projeto desenvolvido em um tutorial com Matheus Battisti.",
      arraySkills: ["ReactJS","CSS Modules","JavaScript","HTML","CRUD em API"],
      image: "/images/costs/Costs1.png",
      link: "https://github.com/alanSxSx/costs-full",
      sizeImg: {
        width: 668,
        height: 457,
      },
      aspectRatio: "2/1",
      moreDetails: {
        image: "/images/costs/Costs2.png",
        titles: ["Objetivo", "Aprendizado", "Desafios do Projeto"],
        texts: [
          "Criar um projeto React trabalhando com API demonstrando os conceitos de componentização, transferência de eventos via props.",
          "Transferência de estado via props, React Router Dom, Css Modules, e principalmente organização do projeto.",
          "Atualização para o react router dom 6 e superiror foi um ponto de desafio para o projeto.",
        ],
      },
    },

  ];

