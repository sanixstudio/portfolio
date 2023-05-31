"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Button } from "flowbite-react";
import { PERSONAL_INFO } from "@/data/personal";
import Image from "next/image";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="snap-start h-screen flex items-center px-4 sm:gap-10 sm:flex-col sm:justify-center md:flex-row">
      <div className="flex flex-col drop-shadow-glossyShadows items-center gap-20 sm:gap-10 lg:gap-20 text-center lg:items-start lg:text-left md:w-2/3">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-widest font-bold uppercase">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold">
            {PERSONAL_INFO.tagline}
          </p>
        </div>
        <p className="leading-6 md:text-lg max-w-[760px]">
          {PERSONAL_INFO.description}
        </p>
        <div className="max-w-lg w-full flex flex-col lg:flex-row gap-3">
          <button className="w-full h-fit rounded-md flex bg-gradient-to-r from-[#272932] to-[#42444F] p-[1px]">
            <span className="w-full h-fit p-4 rounded-md bg-gradient-to-r from-[#42444F] to-[#16171D] ">
              My Work
            </span>
          </button>
          <button className="w-full h-fit rounded-md flex bg-gradient-to-r from-[#272932] to-[#42444F] p-[1px]">
            <span className="w-full h-fit p-4 rounded-md bg-gradient-to-r from-[#42444F] to-[#16171D] ">
              My Work
            </span>
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-1/3 h-full max-h-[450px]">
        {/* <Image
          width={400}
          height={500}
          src="https://picsum.photos/id/237/400/500"
          alt=""
          className="w-full"
        /> */}
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <mesh>
            <boxGeometry args={[3.5, 3.5, 3.5]} />
            <meshStandardMaterial color={"teal"} />
          </mesh>
        </Canvas>
        <box />
      </div>
    </div>
  );
};

export default Hero;
