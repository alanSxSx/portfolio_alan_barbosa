'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Svgs } from "../Common/Svgs";

interface About {
  title: string;
  paragraph: string;
  arraySkills: string[];
  image: string | string[];
  link: string;
  sizeImg: {
    width: number;
    height: number;
  };
  aspectRatio: string;
}

export default function AboutSectionOne({ title, paragraph, arraySkills, image, link, sizeImg, aspectRatio }: About) {

  const firstPartArray = arraySkills?.slice(0, (arraySkills.length + 1) / 2);
  const secondPartArray = arraySkills?.slice((arraySkills.length + 1) / 2);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color dark:text-dark-mode">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
        <Svgs type="checkIcon" />
      </span>
      {text}
    </p>
  );


  return (
    <section className="mt-12.5">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-32.5 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left relative mx-auto md:block md:w-1/2"
          >
            <div className=" p-4 relative flex items-center justify-center w-full rounded-2xl bg-gradient-to-t from-transparent to-cyan-400/[0.2] dark:bg-gradient-to-t from-transparent dark:to-sky-950/50 ">
              {Array.isArray(image) ? (
                //@ts-ignore
                <SliderComponent images={image} width={sizeImg.width} height={sizeImg.height} />
              ) : (
                <Image
                  //@ts-ignore
                  src={image}
                  loading="lazy"
                  quality={100}
                  alt="about-image"
                  width={sizeImg.width}
                  height={sizeImg.height}
                  className=" lg:mr-0 rounded-2xl"
                />
              )}
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2"
          >
            <h2 className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero whitespace-nowrap">
              <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full  before:md:bottom-1 before:sm:bottom-1 before:lg:bottom-1 before:xl:bottom-2.5 before:2xl:bottom-2.5 before:bg-titlebg dark:before:bg-titlebgdark">
                {title}
              </span>
            </h2>
            <p className='mb-8'>
              {paragraph}
            </p>

            <div className="mx-[-12px] flex flex-wrap">
              <div className="px-3 w-1/2 sm:w-1/2">
                {firstPartArray.map((item, index) => (
                  <List key={index} text={item} />
                ))}
              </div>
              <div className="px-3 w-1/2 sm:w-1/2">
                {secondPartArray.map((item, index) => (
                  <List key={index} text={item} />
                ))}
              </div>
            </div>

            {link && (
              <a
                href={link}
                className="mx-auto my-6 flex w-[16rem] cursor-pointer items-center justify-center rounded-md bg-primary py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 sm:mx-0"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                Acessar link do projeto
              </a>
            )}

          </motion.div>
        </div>
      </div>
    </section>

  )
}
