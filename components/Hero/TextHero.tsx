import React from 'react'

export default function TextHero() {

    function age(date: { getFullYear: () => number; getMonth: () => number; getDate: () => number }) {
        const today = new Date();
        const age =
          today.getFullYear() -
          date.getFullYear() -
          Number(today.getMonth() < date.getMonth() || (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
        return age;
      }

    return (
        <div className="animated fadeInUp mt-8 flex items-center justify-center">
            <div className="mx-auto">
                <div className="overflow-hidden rounded-lg shadow-xl dark:bg-primary dark:bg-opacity-10 md:flex">
                    <div className="p-8">
                        <p className="text-xl font-bold md:text-2xl">Sobre Alan Barbosa</p>
                        <p className="my-5 text-base !leading-relaxed text-body-color dark:text-dark-mode sm:text-lg md:text-xl">
                            Atuo no setor de informática há {age(new Date(2015, 1, 1))} anos. Nesse tempo, adquiri vasta esperiência trabalhando com diversos tipos de softwares.
                            <br />
                        </p>
                        <p className="text-base !leading-relaxed text-body-color dark:text-dark-mode sm:text-lg md:text-xl">
                            Na área do Desenvolvimento Web, atuo há aproximadamente 1 ano com projetos pessoais e projetos visando a melhoria e automação de alguns processos das empresas onde atuo.
                        </p>
                        <p className="text-base !leading-relaxed text-body-color dark:text-dark-mode sm:text-lg md:text-xl">
                            As tecnologias que são destaque nos meus projetos são: React JS, Next JS com uso de Javascript e Typescript, implementação de biblioteca de componentes UI Primereact. Implementação de backend em nuvem na Digital Ocean.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
