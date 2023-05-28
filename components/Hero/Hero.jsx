"use client";
import { PERSONAL_INFO } from "@/data/personal";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen snap-start justify-between items-center flex p-4">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-7xl font-bold uppercase">{PERSONAL_INFO.name}</h1>
          <p className="text-2xl font-semibold">{PERSONAL_INFO.tagline}</p>
        </div>
        <p>{PERSONAL_INFO.description}</p>
        <div className="flex gap-3">
          <Button gradientDuoTone="purpleToPink" pill>
            Learn More
          </Button>
          <Button gradientDuoTone="purpleToPink" outline pill>
            My Work
          </Button>
        </div>
      </div>
      <div>
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
