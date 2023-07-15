"use client";
import React from "react";
import { FiCode } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { v1 as uuidv1 } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Footer, Navbar } from "@/components";

const Works = () => {
  const projects = [
    {
      title: "Infomovia",
      description:
        "Explore currently playing, upcoming, and top-rated content. Discover by genre, celebrities, and create your personalized watchlist.",
      techStack: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Next-Auth",
        "TailwindCSS",
        "Tan-Stack",
        "Prisma",
        "MongoDB",
      ],
      demoLink: "https://infomovia3-0.vercel.app/",
      codeLink: "https://github.com/sanixstudio/infomovia3.0.git",
      imageSrc: "/images/infomovia.png",
    },
    {
      title: "Travel Tracker",
      description:
        "ExploreMap: Mark and remember your visited places with titles, descriptions, ratings, and photos on an interactive map. Visualize your travels, relive memories, and share your journey with friends. Create a personalized travel log with this intuitive maps and tracker app.",
      techStack: ["JavaScript", "TailwindCSS"],
      //TODO: add proper link for demo
      demoLink: "https://github.com/sanixstudio/travel-tracker-vite.git",
      codeLink: "https://github.com/sanixstudio/travel-tracker-vite.git",
      imageSrc: "/images/travel.png",
    },
    {
      title: "Beer App",
      description:
        "Discover diverse beers with ABV and IBU levels. Apply filters for Beer Alcohol and Hoppiness. Unleash your inner beer connoisseur with a simple, customizable beer app.",
      techStack: ["HTML", "CSS", "JavaScript", "fetch"],
      demoLink: "https://sanixstudio.github.io/beerApp/",
      codeLink: "https://github.com/sanixstudio/beerApp.git",
      imageSrc: "/images/beer.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen p-4 md:px-40">
        <div className="md:my-20 flex flex-col md:max-w-[1440px] mx-auto">
          <motion.div
            initial={{ x: "300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase">Work</h1>
            <span>Latest Projects</span>
          </motion.div>
          <motion.div
            initial={{ x: "-300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            {projects.map((project) => (
              <div
                key={uuidv1()}
                className="flex flex-col lg:flex-row items-center justify-between gap-20 text-left min-h-[480px] bg-gradient-to-r from-slate-700 to-slate-900 mb-40 max-w-[900px] mx-auto rounded-md"
              >
                <div className="lg:self-start p-10 pb-0 flex-2">
                  <h3 className="text-3xl uppercase font-bold">
                    {project.title}
                  </h3>
                  <p className="my-8">{project.description}</p>
                  <h3 className="text-xl font-bold">Tech Used:</h3>
                  <div className="mt-5 flex gap-2 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span
                        key={uuidv1()}
                        className="text-xs p-2 bg-slate-700 border border-slate-600 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-normal gap-5 my-10">
                    <button
                      initial={{ y: "300%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="h-fit btn-primary"
                    >
                      <Link
                        href={project.codeLink}
                        target="_blank"
                        className="flex items-center gap-3 h-fit py-2 px-8"
                      >
                        <span>Code</span>
                        <FiCode size={22} />
                      </Link>
                    </button>
                    <button
                      initial={{ y: "300%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="h-fit border btn-secondary"
                    >
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="flex items-center gap-3 h-fit py-2 px-8"
                      >
                        <span>Demo</span>
                        <HiCursorClick size={22} />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end pr-10 pb-10">
                  <Image
                    width={200}
                    height={200}
                    src={project.imageSrc}
                    alt={project.title}
                    className="max-w-sm"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Works;
