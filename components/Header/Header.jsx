"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

export const NavLink = ({ name, linkTo }) => {
  return (
    <li>
      <a href={linkTo}>{name}</a>
    </li>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky w-full max-w-[1220px] flex-row-between p-4 items-center  mx-auto">
      <a href="/">
        <button className="rounded-full bg-teal-700 bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-[50px] h-[50px]">
          <h1 className="text-2xl md:text-3xl">AN</h1>
        </button>
      </a>
      <ul className="hidden md:flex gap-10">
        <NavLink name={"Home"} linkTo={"/"} />
        <NavLink name={"About"} linkTo={"#"} />
        <NavLink name={"Work"} linkTo={"#"} />
        <NavLink name={"Contact"} linkTo={"#"} />
      </ul>
      <CiMenuFries size={24} className="md:hidden" onClick={() => toggleMenu} />
      <div className="flex flex-col md:hidden bg-red-600 opacity-50 absolute w-1/3 h-screen top-0 right-0">
        <ul className="">
          <GrClose size={24} className="md:hidden text-white " />
          <NavLink name="Home" linkTo={"#"} />
          <NavLink name="About" linkTo={"#"} />
          <NavLink name="Work" linkTo={"#"} />
          <NavLink name="Contact" linkTo={"#"} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
