import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/personal";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex hero h-screen items-center">
      <div className="flex items-center flex-col md:justify-center px-4 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={160}
            height={160}
            src="/images/adi.png"
            alt="adi logo"
          />
        </motion.div>
        <div className="flex flex-col drop-shadow-glossyShadows items-center justify-center gap-10 sm:gap-20 lg:gap-20 text-center lg:items-start lg:text-left md:w-2/3">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-wide font-bold uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-3xl font-semibold tracking-widest">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="leading-6 md:text-xl text-center"
          >
            {PERSONAL_INFO.description}
          </motion.p>
          <div className="w-full max-w-[600px] mx-auto flex flex-col lg:flex-row gap-4 md:gap-8">
            <Link href={"/work"} className="w-full">
              <motion.button
                initial={{ y: "300%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-fit primary-btn-border"
              >
                <span className="w-full h-fit primary-btn-bg">My Work</span>
              </motion.button>
            </Link>
            <Link href={"/contact"} className="w-full">
              <motion.button
                initial={{ y: "300%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-fit primary-btn-border"
              >
                <span className="w-full h-fit primary-btn-bg">Contact</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
