import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import useWindowSize from "@/hooks/useWindowSize";

const NavLink = ({ title, href, active }) => {
  return (
    <li>
      <a
        href={href}
        className={`text-${active ? "gray-300 font-bold" : "gray-500"}`}
        aria-current={active ? "page" : undefined}
      >
        {title}
      </a>
    </li>
  );
};

const MainNav = ({ isMobile }) => {
  const path = usePathname();
  const pageName = path.split("/")[1];

  return (
    <ul
      className={`flex flex-col gap-5 ${
        isMobile
          ? "w-full h-screen bg-slate-900 justify-center items-center text-2xl"
          : "text-center"
      }`}
    >
      <NavLink active={"" === pageName} title="Home" href="/" />
      <NavLink active={"about" === pageName} title="About" href="about" />
      <NavLink active={"work" === pageName} title="Work" href="work" />
      <NavLink active={"contact" === pageName} title="Contact" href="contact" />
    </ul>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 768;

  return (
    <header>
      <nav
        className={`fixed inset-0 z-50 text-white ${
          isMobile ? "w-full" : "max-w-[100px]"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 md:hidden">
          {!isMobile && (
            <a href="/">
              <span className="text-4xl whitespace-nowrap">AN</span>
            </a>
          )}
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <BiMenuAltLeft size={32} />
          </button>
        </div>
        <div className={showMenu ? "block" : "hidden"}>
          {showMenu && (
            <div className="flex flex-col items-center justify-center h-screen">
              <MainNav isMobile={isMobile} />
            </div>
          )}
        </div>
      </nav>
      <nav className="hidden md:flex fixed h-full z-50">
        <div className="flex flex-col flex-wrap items-between justify-between h-full mx-auto p-4">
          {!isMobile && (
            <a href="/">
              <span className="text-4xl whitespace-nowrap">AN</span>
            </a>
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
