"use client";
import { PERSONAL_INFO } from "@/data/personal";
import { Button } from "flowbite-react";
import Image from "next/image";
import React, { useEffect } from "react";

// lg:justify-between lg:flex-row
// px-4 flex flex-col

const Hero = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  return (
    <div className="snap-start h-[90%] flex items-center px-4 sm:gap-10 sm:flex-col sm:justify-center md:flex-row">
      <div className="flex flex-col items-center gap-20 sm:gap-10 lg:gap-20 text-center lg:items-start lg:text-left md:w-2/3">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-widest font-bold uppercase">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold">
            {PERSONAL_INFO.tagline}
          </p>
        </div>
        <p className="leading-6 md:text-lg max-w-[760px]">{PERSONAL_INFO.description}</p>
        <div className="max-w-lg w-full flex flex-col lg:flex-row gap-3">
          <Button gradientDuoTone="purpleToPink" size="xl" pill fullSized>
            Learn More
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            className="bg-red-500"
            outline
            pill
            size={"xl"}
            fullSized
          >
            My Work
          </Button>
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
        <Image
          width={400}
          height={500}
          src="https://picsum.photos/id/237/400/500"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
