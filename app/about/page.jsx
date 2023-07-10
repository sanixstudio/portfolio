'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen snap-start p-4 md:pl-20 w-full" id="about">
      <div className="h-full my-20 flex flex-col">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase">About</h1>
          <span>Me</span>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full gap-10">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-3 md:w-full p-10 bg-gradient-to-t from-[#42444F] to-[#272932]"
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
            className="flex-2 w-full border min-h-[400px]"
          >
            right
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
