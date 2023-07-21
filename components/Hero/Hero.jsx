import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/personal";
import Link from "next/link";
import { Navbar } from "@/components";
import { BiSolidContact } from "react-icons/bi";
import { AiOutlineCodepen } from "react-icons/ai";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="flex hero h-screen -mt-10 md:-mt-0 items-center">
        <div className="flex w-full items-center flex-col md:justify-center px-4 gap-10 mx-auto">
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
              className="leading-6 md:text-xl mx-auto text-center max-w-7xl"
            >
              <Balancer>{PERSONAL_INFO.description}</Balancer>
            </motion.p>
            <div className="flex items-center justify-center mx-auto w-full max-w-[600px] gap-5 mt-5 md:my-10">
              <motion.button
                initial={{ y: "300%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="h-fit btn-primary w-full"
              >
                <Link
                  href={"/work"}
                  className="flex items-center justify-center gap-3 h-fit py-2 md:py-4 px-8"
                >
                  <span>Projects</span>
                  <AiOutlineCodepen size={28} />
                </Link>
              </motion.button>
              <motion.button
                initial={{ y: "300%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="h-fit border btn-secondary w-full"
              >
                <Link
                  href={"/contact"}
                  className="flex items-center justify-center gap-3 h-fit py-2 md:py-4 px-8"
                >
                  <span>Contact</span>
                  <BiSolidContact size={24} />
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
