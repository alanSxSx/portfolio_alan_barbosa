import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import { dataAbout } from "@/public/data";
import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SectionHeader from "@/components/Common/SectionHeader";
import Certifications from '@/components/Certifications';

export const metadata: Metadata = {
	title: "Portfólio - Alan Barbosa",
  description: "Portfólio de Alan Barbosa - QA engineer",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
			{/* <Certifications /> */}
      <Feature />
      <SectionHeader
        headerInfo={{
          title: "PROJETOS EM DESTAQUE",
          subtitle: "Aplicações Desenvolvidas",
          description: `Apresento os projetos de desenvolvimento pessoal, onde pude aplicar meus conhecimentos técnicos em qualidade de software e automação de testes utilizando tecnologias como: Cypress, K6, Typescript, Javascript, NodeJs, Jest, ReactJs, NextJs entre outras.`,
        }}
      />
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} aspectRatio={item.aspectRatio} />
        </React.Fragment>
      ))}
    </main>
  );
}
