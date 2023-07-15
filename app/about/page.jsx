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
import { Footer, Navbar } from "@/components";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen p-4 md:px-40">
        <div className="my-20 pb-40 flex flex-col md:max-w-[1440px] mx-auto">
          <motion.div
            initial={{ x: "-300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase">About</h1>
            <span>Me</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full md:gap-10 xl:gap-20 2xl:gap-40">
            <motion.div
              initial={{ x: "-300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-3 md:w-full self-start p-10 bg-gradient-to-t from-[#42444F] to-[#272932] max-w-[420px]"
            >
              <Image
                width={600}
                height={400}
                src={"/images/adi.jpg"}
                alt="adnan niaz"
                className="object-contain w-[420px]"
              />
            </motion.div>
            <motion.div
              initial={{ x: "300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="self-start w-full"
            >
              <h2 className="mt-28 md:mt-0 text-4xl mb-10 font-bold uppercase">
                A little about myself
              </h2>
              <p className="mb-10 leading-7">
                I&apos;m a full-stack software engineer based in the Bay Area. I
                specialize in helping startups grow their businesses by creating
                intuitive and visually appealing user interfaces. With a strong
                foundation in full-stack development from UC Berkeley, I have
                the skills and experience necessary to tackle complex problems
                and bring business ideas to life.
              </p>
              <p className="leading-7">
                In my spare time, I am constantly seeking opportunities to learn
                and grow as a developer, including staying up-to-date on the
                latest technologies, working on personal projects, and helping
                others learn to code.
              </p>
              <div>
                <h2 className="text-2xl mt-20 mb-10">Skilled In</h2>
                <div className="flex justify-center md:justify-normal flex-wrap gap-5">
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <AiOutlineHtml5 color="#dd4b25" size={36} />
                    <span className="text-xs">HTML</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoCss3 color="#254BDD" size={36} />
                    <span className="text-xs">CSS</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoJavascript color="#EFD81D" size={36} />
                    <span className="text-xs">JavaScript</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoTypescript color="#2F74C0" size={36} />
                    <span className="text-xs">TypeScript</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoReact color="#5ED3F3" size={36} />
                    <span className="text-xs">React</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <TbBrandNextjs size={36} />
                    <span className="text-xs">Next.js</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoNodejs color="#73AA5D" size={36} />
                    <span className="text-xs">Node.js</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <SiExpress size={36} />
                    <span className="text-xs">Express</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoMongodb color="#52A946" size={36} />
                    <span className="text-xs">MongoDB</span>
                  </div>
                  <div className="bg-white/5 w-[75px] h-[75px] hover:bg-white/10 flex gap-2 flex-col justify-center items-center">
                    <BiLogoGraphql color="#DE33A6" size={36} />
                    <span className="text-xs">GraphQl</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-40 md:mt-60"
          >
            <h2 className="text-4xl font-bold mb-5">
              4+ Years of experience as Full-stack Engineer
              <br />
            </h2>
            <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-20">
              <div className="flex gap-5 items-center">
                <p className="leading-7">
                  <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                    Website Development
                  </span>
                  I create high-quality websites that align with the
                  company&apos;s brand and goals. Focus on creating
                  user-friendly interfaces, intuitive navigation, and compelling
                  visuals to enhance user engagement and drive conversions.
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <p className="leading-7">
                  <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                    User Experience (UX) Design:
                  </span>
                  I optimize website usability and accessibility for exceptional
                  user experiences, increasing customer satisfaction and
                  retention.
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <p className="leading-7">
                  <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                    Responsive Design:
                  </span>
                  I specialize in responsive design, creating websites that
                  seamlessly adapt to various devices and screen sizes. This
                  ensures accessibility and visual appeal across desktops,
                  tablets, and mobile devices, catering to a diverse user base.
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <p className="leading-7">
                  <span className="tracking-widest border-b border-gray-700 pb-3 font-bold text-xl uppercase mb-5 block">
                    Performance Optimization:
                  </span>
                  I optimize websites for fast loading times and smooth
                  performance. Through techniques such as code optimization,
                  caching, and asset compression, I enhance the user experience,
                  boost search engine rankings, and drive organic traffic to the
                  site.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
