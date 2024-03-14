'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

interface Details {
  moreDetails: {
    image: string | string[];
    titles: string[];
    texts: string[];
  };
  sizeImage: {
    width: number;
    height: number;
  };
  aspectRatio: string;
}

export default function AboutSectionTwo({ moreDetails, sizeImage, aspectRatio }: Details) {
  return (
    <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
            
              
              {moreDetails?.titles?.map((item, index) => {
                  return (
                    <div className="mb-9" key={index}>
                      <h3 className="mb-4 text-xl font-bold text-black opacity-90 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {item}
                      </h3>
                      <p className="text-base leading-relaxed text-body-color dark:text-dark-mode sm:text-lg sm:leading-relaxed">
                        {moreDetails.texts[index]}
                      </p>
                    </div>
                  );
                })}
             
        
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden md:block md:w-1/2"
            >
              <div className=" p-4 relative flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-t from-transparent to-yellow-400/[0.2] dark:bg-gradient-to-t from-transparent dark:to-sky-950/50 ">
              {Array.isArray(moreDetails.image) ? (
                //@ts-ignore
                <SliderComponent images={moreDetails.image} width={sizeImage.width} height={sizeImage.height} />
              ) : (
                <Image
                  //@ts-ignore
                  src={moreDetails.image}
                  loading="lazy"
                  quality={75}
                  alt="about-image"
                  width={sizeImage.width}
                  height={sizeImage.height}
                  className="max-w-full lg:mr-0 rounded-2xl"              
                 
                />
              )}
            </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
