import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";

import { dataAbout } from "@/public/data";
import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Portfólio - Alan Barbosa",
  description: "Projeto desenvolvido por Alan Barbosa",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <SectionHeader
        headerInfo={{
          title: "PROJETOS EM DESTAQUE",
          subtitle: "Aplicações Desenvolvidas",
          description: `Apresento os projetos de desenvolvimento pessoal, onde pude demonstrar meus conhecimentos técnicos em várias tecnologias como: ReactJS, NextJS, Typescript, Javascript, NodeJs entre outras.`,
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
