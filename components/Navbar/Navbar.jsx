import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";

const NavLink = ({ title, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li>
      <Link href={href}>
        <span className={`text-${active ? "gray-300 font-bold" : "gray-500"}`}>
          {title}
        </span>
      </Link>
    </li>
  );
};

const MainNav = ({ isMobile }) => {
  return (
    <ul
      className={`flex flex-col gap-5 ${
        isMobile
          ? "w-full h-screen bg-slate-900 justify-center items-center text-2xl"
          : "text-center"
      }`}
    >
      <NavLink title="Home" href="/" />
      <NavLink title="About" href="/about" />
      <NavLink title="Work" href="/work" />
      <NavLink title="Contact" href="/contact" />
    </ul>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed inset-0 z-50 text-white ${
          isMobile ? "w-full" : "max-w-[100px]"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 md:hidden">
          {!isMobile && (
            <Link href="/">
              <span className="text-4xl whitespace-nowrap">AN</span>
            </Link>
          )}
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <BiMenuAltLeft size={32} />
          </button>
        </div>
        {showMenu && (
          <div className="flex flex-col items-center justify-center h-screen">
            <MainNav isMobile={isMobile} />
          </div>
        )}
      </nav>
      <nav className="hidden md:flex fixed h-full z-50">
        <div className="flex flex-col flex-wrap items-between justify-between h-full mx-auto p-4">
          {!isMobile && (
            <Link href="/">
              <span className="text-4xl whitespace-nowrap">AN</span>
            </Link>
          )}
          <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div>
          <MainNav isMobile={isMobile} className="flex-1" />
          <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
