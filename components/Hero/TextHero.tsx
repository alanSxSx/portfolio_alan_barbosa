import React from "react";

export default function TextHero() {
  function age(date: {
    getFullYear: () => number;
    getMonth: () => number;
    getDate: () => number;
  }) {
    const today = new Date();
    const age =
      today.getFullYear() -
      date.getFullYear() -
      Number(
        today.getMonth() < date.getMonth() ||
          (today.getMonth() === date.getMonth() &&
            today.getDate() < date.getDate()),
      );
    return age;
  }

  return (
    <div className="animated fadeInUp mt-8 flex items-center justify-center bg-white dark:bg-black">
      <div className="mx-auto">
        <div className="overflow-hidden rounded-lg shadow-xl dark:bg-primary dark:bg-opacity-10 md:flex">
          <div className="p-8">
            <p className="text-xl font-bold md:text-2xl">Sobre Alan Barbosa</p>
            <p className="text-body-color dark:text-dark-mode my-5 text-base !leading-relaxed sm:text-lg md:text-xl">
              Atuo no setor de informática há {age(new Date(2015, 1, 1))} anos.
              Nesse tempo, adquiri vasta esperiência trabalhando com diversos
              tipos de softwares.
              <br />
            </p>
            <p className="text-body-color dark:text-dark-mode text-base !leading-relaxed sm:text-lg md:text-xl">
              Na área de Qualidade, atuo há cerca de {age(new Date(2021, 1, 1))}{" "}
              anos, desenvolvendo projetos pessoais e empresariais voltados para
              a melhoria contínua e automação de processos nas empresas em que
              trabalhei.
            </p>
            <br />
            <p className="text-body-color dark:text-dark-mode text-base !leading-relaxed sm:text-lg md:text-xl">
              As tecnologias que são destaque nos meus projetos são: Selenium
              WebDriver, Cypress, Jest para testes automatizados,
              integração contínua com Jenkins e GitLab CI/CD, além de
              ferramentas como Postman e Insomnia para testes de API e desempenho
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
