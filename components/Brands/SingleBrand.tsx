import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <div className="flex flex-col justify-items-center items-center gap-2">
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        target="_blank"
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <Image
          className="flex fixed opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="hidden opacity-50 transition-all duration-300  hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        />
      </motion.a>
      <Link href={href}>
        <p className="flex justify-items-center items-center opacity-65 transition-all cursor-pointer duration-300 hover:opacity-100 cursor-pointer dark:hidden">
          {name}
        </p>
      </Link>
      <Link href={href}>
        <p className="hidden flex justify-items-center items-center opacity-65 transition-all cursor-pointer duration-300 hover:opacity-100 dark:block">
          {name}
        </p>
      </Link>
    </div>

  );
};

export default SingleBrand;
