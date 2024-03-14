import Image from 'next/image'
import React from 'react'
import "../../styles/index.css";

export default function ImageHero() {
    return (
        <div className="mr-6 flex flex-col items-center justify-center">
            <div className="container-image">
                <div className="container-inner">
                    <div className="circle-cover bg-primary opacity-60" />
                    <Image
                        src="/images/hero/profile02.png"
                        alt="Alan Barbosa"
                        width={500}
                        height={500}
                        quality={100}
                        priority={true}
                        placeholder="blur"
                        blurDataURL="/images/hero/profile02.png"
                        className="img w-full rounded-full object-cover md:h-auto md:rounded-none md:rounded-l-lg"
                    />
                </div>
            </div>
        </div>
    )
}
