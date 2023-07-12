"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const NavLink = ({ title, href, active }) => {
  return (
    <li>
      <a
        href={href}
        className={`${active ? "text-gray-300" : "text-gray-500"}`}
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
};

export const MainNav = () => {
  const path = usePathname();
  const pageName = path.split("/")[1];

  return (
    <div id="navbar-default">
      <ul className="flex flex-col gap-5 text-center">
        <NavLink active={"" === pageName} title="Home" href="/" />
        <NavLink active={"about" === pageName} title="About" href="about" />
        <NavLink active={"work" === pageName} title="Work" href="work" />
        <NavLink
          active={"contact" === pageName}
          title="Contact"
          href="contact"
        />
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.div>
      <nav className="hidden md:flex fixed h-full z-50">
        <div className="flex flex-col flex-wrap items-between justify-between h-full mx-auto p-4">
          <a href="/">
            <span className="text-4xl whitespace-nowrap">AN</span>
          </a>
          <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div>
          <MainNav className="flex-1" />
          <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
