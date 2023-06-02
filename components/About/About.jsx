import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="h-screen snap-start p-4 md:pl-20 flex flex-col w-full"
      id="about"
    >
      <div>
        <h1 className="text-4xl font-bold uppercase">About</h1>
        <span>Me</span>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center h-full gap-10">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full border min-h-[400px]"
        >
          left
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full border min-h-[400px]"
        >
          right
        </motion.div>
      </div>
    </div>
  );
};

export default About;
