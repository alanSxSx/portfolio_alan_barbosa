"use client";
import Image from "next/image";
import { useState } from "react";
import ImageHero from "./ImageHero";
import TextHero from './TextHero';

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <section className="pb-20 pt-15">
        <div className="mx-auto max-w-c-1390 px-4">
          <div className="flex items-center gap-8 gap-32.5">
            <div className=" w-full">
              <h4 className="mb-4.5 text-center text-lg font-medium text-black dark:text-white">
                🔥 Portfólio - Alan Rodrigues Barbosa
              </h4>
              <h1 className="mb-5 text-center pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Desenvolvedor {"   "}
                <span className="relative text-center inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Front-End
                </span>
              </h1>
            </div>
            </div>

            <div className="animate_right flex flex-col items-center content-center">
              <ImageHero/>
              <TextHero/>                               
            </div>
          </div>
      </section>
  );
};

export default Hero;
