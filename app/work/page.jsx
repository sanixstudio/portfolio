"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiCode } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { v1 as uuidv1 } from "uuid";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Works = () => {
  const projects = [
    {
      title: "Infomovia",
      description: "Description for Project 1",
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
      description: "Description for Project 2",
      techStack: ["React", "Node.js", "MongoDB"],
      demoLink: "https://example.com/demo2",
      codeLink: "https://github.com/example/project2",
      imageSrc: "https://picsum.photos/id/137/300/200",
    },
    {
      title: "Beer App",
      description: "Description for Project 3",
      techStack: ["Python", "Django", "PostgreSQL"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://github.com/example/project3",
      imageSrc: "https://picsum.photos/id/537/300/200",
    },
  ];

  return (
    <div className="h-screen p-4 md:px-40">
      <div className="my-20 pb-40 flex flex-col md:max-w-[1440px] mx-auto">
        <motion.div
          initial={{ x: "300%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Work</h1>
          <span>Latest</span>
        </motion.div>
        <motion.div
          initial={{ x: "-300%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <Carousel
            emulateTouch
            className="projects-carousel max-w-[900px] mx-auto"
          >
            {projects.map((project) => (
              <div
                key={uuidv1()}
                className="flex flex-col lg:flex-row items-center  rounded-md justify-between gap-20 text-left border border-slate-700 min-h-[480px] bg-gradient-to-r from-[#42444F] to-transparent p-10 "
              >
                <div className="lg:self-start order-2 lg:order-1">
                  <h3 className="text-3xl uppercase">{project.title}</h3>
                  <p className="my-8">
                    InfoMovia is a front-end application that allows users to
                    retrieve information for movies/tv-shows from TMDB InfoMovia
                    is a front-end application that allows users to retrieve
                    information for movies/tv-shows from TMDB
                  </p>
                  <h3 className="text-xl uppercase">Tech Used:</h3>
                  <div className="mt-5 flex gap-2 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span
                        key={uuidv1()}
                        className="text-xs p-2 bg-slate-800 rounded-sm"
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
                      className=" h-fit primary-btn-border"
                    >
                      <Link
                        href={project.codeLink}
                        target="_blank"
                        className="flex items-center gap-3 h-fit primary-btn-bg px-10"
                      >
                        <span>Code</span>
                        <FiCode size={22} />
                      </Link>
                    </button>
                    <button
                      initial={{ y: "300%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className=" h-fit primary-btn-border"
                    >
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="flex items-center gap-3 h-fit primary-btn-bg px-10"
                      >
                        <span>Demo</span>
                        <HiCursorClick size={22} />
                      </Link>
                    </button>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  src={project.imageSrc}
                  alt={project.title}
                  className="lg:order-2 object-contain max-w-fit"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
