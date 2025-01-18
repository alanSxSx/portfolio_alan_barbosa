import Image from "next/image";
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
              Nesse tempo, adquiri vasta experiência trabalhando com diversos
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
              WebDriver, Cypress, Jest para testes automatizados, integração
              contínua com Jenkins e GitLab CI/CD, além de ferramentas como
              Postman e Insomnia para testes de API e desempenho.
            </p>
            <br />
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-body-color dark:text-dark-mode text-base !leading-relaxed sm:text-lg md:text-xl">
                  Minha conquista mais recente foi a certificação ISTQB - CTFL
                  (Certified Tester Foundation Level), que reforça meu
                  compromisso com as melhores práticas em qualidade de software
                  e minha busca constante por excelência profissional.
                </p>
                <a
                  href="https://app.skillsclub.com/credential/86317-3053b4eb590cd333374f7cb66073e2a6ea120f34ce36f0c2f2d3724b417f78e3?locale=en&badge=true"
                  className="mx-auto my-6 flex w-[16rem] cursor-pointer items-center justify-center rounded-md bg-primary py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 sm:mx-0"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  Validar Certificação
                </a>
              </div>
              <Image
                src="/ctfl.png"
                alt="Alan Barbosa"
                width={170}
								height={170}
								className='hidden object-contain sm:flex md:flex'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
