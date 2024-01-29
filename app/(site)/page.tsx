import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import { dataAbout } from "@/public/data";
import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
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
          title: "DESTAQUE PROFISSIONAL",
          subtitle: "Habilidades além do Curriculum",
          description: `Nesta sessão, pretendo apresentar minhas habilidades pessoais e interpessoais com base em evidências concretas. Meu objetivo é fundamentar minhas competências em fatos e experiências comprovadas, oferecendo uma visão objetiva de como contribuí de maneira efetiva para o sucesso em contextos anteriores.`,
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
