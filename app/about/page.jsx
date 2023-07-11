"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen  p-4 md:px-40">
      <div className=" my-20 flex flex-col md:max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">About</h1>
          <span>Me</span>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full md:gap-10 xl:gap-20  2xl:gap-40">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-3 md:w-full p-10 bg-gradient-to-t from-[#42444F] to-[#272932] max-w-[420px]"
          >
            <Image
              width={600}
              height={400}
              src={"/images/person.jpg"}
              alt="adnan niaz"
              className="object-contain w-full"
            />
          </motion.div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="self-start w-full"
          >
            <h2 className="text-4xl mb-10">A little about myself</h2>
            <p>
              I&apos;m a full-stack software engineer based in the Bay Area. I
              specialize in helping startups grow their businesses by creating
              intuitive and visually appealing user interfaces. With a strong
              foundation in full-stack development from UC Berkeley, I have the
              skills and experience necessary to tackle complex problems and
              bring business ideas to life.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
