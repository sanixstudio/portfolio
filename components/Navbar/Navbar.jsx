import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";

const NavLink = ({ title, href, setShowMenu }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li>
      <Link href={href}>
        <button
          onClick={() => setShowMenu(false)}
          className={`text-${
            active ? "text-gray-300 font-bold" : "text-gray-500 font-thin"
          }`}
        >
          {title}
        </button>
      </Link>
    </li>
  );
};

const MainNav = ({ isMobile, setShowMenu }) => {
  return (
    <ul
      className={`flex flex-col gap-5 ${
        isMobile
          ? "fixed top-0 left-0 w-full h-screen md:-mt-20 z-10 p-10 bg-slate-900 justify-center items-center text-2xl"
          : "h-screen -ml-14 before:border before:border-slate-400 after:border after:border-slate-400 justify-center -mt-10 text-center left-0"
      }`}
    >
      <NavLink setShowMenu={setShowMenu} title="Home" href="/" />
      <NavLink setShowMenu={setShowMenu} title="About" href="/about" />
      <NavLink setShowMenu={setShowMenu} title="Work" href="/work" />
      <NavLink setShowMenu={setShowMenu} title="Contact" href="/contact" />
    </ul>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

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
        className={`${isMobile && "z-10"}fixed inset-0 text-white w-full
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 md:hidden relative">
          {!isMobile && (
            <Link href="/">
              <span className="text-4xl hidden md:flex whitespace-nowrap">
                AN
              </span>
            </Link>
          )}
          <button
            className="text-2xl focus:outline-none absolute z-20"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <BiMenuAltLeft size={32} />
          </button>
        </div>
        {showMenu && (
          <div className="fixed top-0 left-0 w-full h-screen md:-mt-20 z-10 p-10 bg-slate-900 text-2xl">
            <MainNav setShowMenu={setShowMenu} isMobile={isMobile} />
          </div>
        )}
      </nav>
      <nav className="hidden md:flex fixed h-full z-50">
        <div className="hidden md:flex flex-col flex-wrap items-between justify-between h-full mx-auto p-4">
          {!isMobile && (
            <Link href="/">
              <span className="text-4xl whitespace-nowrap">AN</span>
            </Link>
          )}
          {/* <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div> */}
          <MainNav setShowMenu={setShowMenu} isMobile={isMobile} />
          {/* <div className="flex-1 max-h-[40%] flex justify-center">
            <div className="bg-gray-600 w-[1px]"></div>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
