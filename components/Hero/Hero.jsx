"use client";
import { PERSONAL_INFO } from "@/data/personal";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen snap-start justify lg:justify-between items-center flex flex-col lg:flex-row p-4 sm:p-8 gap-10">
      <div className="flex flex-col gap-10 text-center mt-28">
        <div>
          <h1 className="text-4xl tracking-widest font-bold uppercase">
            {PERSONAL_INFO.name}
          </h1>
          <p className=" font-semibold">{PERSONAL_INFO.tagline}</p>
        </div>
        <p>{PERSONAL_INFO.description}</p>
        <div className="flex gap-3 max-w-lg">
          <Button gradientDuoTone="purpleToPink" size="sm" pill fullSized>
            Learn More
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            className="bg-red-500"
            outline
            pill
            size={"sm"}
            fullSized
          >
            My Work
          </Button>
        </div>
      </div>
      <div className="hidden md:visible">
        <Image
          width={400}
          height={500}
          src="https://picsum.photos/id/237/400/500"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
