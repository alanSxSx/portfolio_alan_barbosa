import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import { dataAbout } from "@/public/data";
import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";

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
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
        </React.Fragment>
      ))}
      <About/>
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <Testimonial />
    </main>
  );
}
