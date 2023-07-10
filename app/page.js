"use client";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/personal";

export default function Home() {
  return (
    <Flowbite theme={{ customTheme }}>
      <main className="max-w-[1220px] mx-auto bg-gray-5-- backdrop-opacity-30">
        <div className="snap-start hero" id="home">
          <div className="flex items-center flex-col justify-center px-4 h-screen gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              // animate={{ opacity: 1, scale: [2, 1] }}
              whileInView={{ opacity: 1, scale: [2, 1] }}
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
            <div className="flex flex-col drop-shadow-glossyShadows items-center justify-center gap-20 sm:gap-10 lg:gap-20 text-center lg:items-start lg:text-left md:w-2/3">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-wide font-bold uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold tracking-widest">
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
              <div className="w-full max-w-[600px] mx-auto flex flex-col lg:flex-row gap-8">
                <motion.button
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-fit primary-btn-border"
                >
                  <span className="w-full h-fit primary-btn-bg">My Work</span>
                </motion.button>
                <motion.button
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-fit primary-btn-border"
                >
                  <span className="w-full h-fit primary-btn-bg">Contact</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Flowbite>
  );
}
