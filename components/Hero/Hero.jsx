"use client";
import React, { useEffect } from "react";
import { PERSONAL_INFO } from "@/data/personal";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="snap-start hero">
      <div className="flex items-center flex-col justify-center px-4 h-screen gap-20">
        <Image width={160} height={160} src="/images/adi.png" alt="adi logo" />
        <div className="flex flex-col drop-shadow-glossyShadows items-center justify-center gap-20 sm:gap-10 lg:gap-20 text-center lg:items-start lg:text-left md:w-2/3">
          <div className="w-full text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-wide font-bold uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold tracking-widest">
              {PERSONAL_INFO.tagline}
            </p>
          </div>
          <p className="leading-6 md:text-xl text-center">
            {PERSONAL_INFO.description}
          </p>
          <div className="w-full max-w-[600px] mx-auto flex flex-col lg:flex-row gap-8">
            <button className="w-full h-fit primary-btn-border">
              <span className="w-full h-fit primary-btn-bg">My Work</span>
            </button>
            <button className="w-full h-fit primary-btn-border">
              <span className="w-full h-fit primary-btn-bg">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
