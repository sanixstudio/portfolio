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
      className="max-w-[1440px] z-20 relative mx-auto px-6 h-[80px] flex justify-between items-center"
    >
      <Link href={"/"}>
        <h1 className="md:hidden text-4xl font-bold">AN</h1>
        <h1 className="hidden md:block text-4xl font-bold">ADNAN-N</h1>
      </Link>
      <nav className="hidden lex-1 md:flex md:justify-end md:gap-8">
        <Link href={"/"}>HOME</Link>
        <Link href={"/about"}>ABOUT</Link>
        <Link href={"/work"}>PROJECTS</Link>
        <Link href={"/contact"}>CONTACT</Link>
      </nav>
      {/* Mobile Menu */}
      <motion.nav
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`absolute left-0 top-0 w-full md:hidden h-screen -ml-4 backdrop-blur-md flex justify-start md:gap-8`}
      >
        <div className="relative w-2/3 flex flex-col justify-center bg-slate-800 items-center gap-10 uppercase">
          {/* <Button
            className="absolute top-5 left-5 rounded-md border-gray-600 hover:bg-gray-600 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={26} />
          </Button> */}
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
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <IoMdClose size={26} />
          </motion.div>
        ) : (
          <HiMenuAlt2 size={26} />
        )}
      </Button>
    </motion.div>
  );
};

export default Navbar;
