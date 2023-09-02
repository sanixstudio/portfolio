"use client";
import { useState } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      x: "-300%",
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1440px] relative mx-auto px-4 h-[80px] flex justify-between items-center"
    >
      <Link href={"/"}>
        <h1 className="md:hidden text-4xl font-bold">AN</h1>
        <h1 className="hidden md:block text-4xl font-bold">ADNAN-N</h1>
      </Link>
      <nav className="hidden lex-1 md:flex md:justify-end md:gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/work"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      {/* Mobile Menu */}
      <motion.nav
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`absolute w-full z-10 md:hidden h-screen -ml-4 backdrop-blur-md top-0 flex justify-start md:gap-8`}
      >
        <div className="relative w-2/3 flex flex-col justify-center bg-slate-800 items-center gap-10 uppercase">
          <Button
            className="absolute top-5 left-5 rounded-md border-gray-600 hover:bg-gray-600 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={26} />
          </Button>
          <Link className="uppercase font-bold text-2xl" href={"/"}>
            Home
          </Link>
          <Link className="uppercase font-bold text-2xl" href={"/about"}>
            About
          </Link>
          <Link className="uppercase font-bold text-2xl" href={"/work"}>
            Projects
          </Link>
          <Link className="uppercase font-bold text-2xl" href={"/contact"}>
            Contact
          </Link>
        </div>
      </motion.nav>
      <Button
        className="md:hidden rounded-md border-gray-600 hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)} // Toggle isOpen
      >
        <HiMenuAlt2 size={26} />
      </Button>
    </motion.div>
  );
};

export default Navbar;
