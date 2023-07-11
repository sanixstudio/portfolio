"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoGraphql,
} from "react-icons/bi";

const About = () => {
  return (
    <div className="h-screen p-4 md:px-40">
      <div className="my-20 pb-20 flex flex-col md:max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">About</h1>
          <span>Me</span>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full md:gap-10 xl:gap-20  2xl:gap-40">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-3 md:w-full self-start p-10 bg-gradient-to-t from-[#42444F] to-[#272932] max-w-[420px]"
          >
            <Image
              width={600}
              height={400}
              src={"/images/adi.jpg"}
              alt="adnan niaz"
              className="object-contain w-full w-[420px]"
            />
          </motion.div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="self-start w-full"
          >
            <h2 className="text-4xl mb-10 font-bold uppercase">
              A little about myself
            </h2>
            <p className="mb-10 leading-7">
              I&apos;m a full-stack software engineer based in the Bay Area. I
              specialize in helping startups grow their businesses by creating
              intuitive and visually appealing user interfaces. With a strong
              foundation in full-stack development from UC Berkeley, I have the
              skills and experience necessary to tackle complex problems and
              bring business ideas to life.
            </p>
            <p className="leading-7">
              In my spare time, I am constantly seeking opportunities to learn
              and grow as a developer, including staying up-to-date on the
              latest technologies, working on personal projects, and helping
              others learn to code.
            </p>
            <div>
              <h2 className="text-2xl mt-20 mb-10">Skilled In</h2>
              <div className="flex flex-wrap gap-5">
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <AiOutlineHtml5 size={36} />
                  <span className="text-xs">HTML</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoCss3 size={36} />
                  <span className="text-xs">CSS</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoJavascript size={36} />
                  <span className="text-xs">JavaScript</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoTypescript size={36} />
                  <span className="text-xs">TypeScript</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoReact size={36} />
                  <span className="text-xs">React</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <TbBrandNextjs size={36} />
                  <span className="text-xs">Next.js</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoNodejs size={36} />
                  <span className="text-xs">Node.js</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <SiExpress size={36} />
                  <span className="text-xs">Express</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoMongodb size={36} />
                  <span className="text-xs">MongoDB</span>
                </div>
                <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                  <BiLogoGraphql size={36} />
                  <span className="text-xs">GraphQl</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
