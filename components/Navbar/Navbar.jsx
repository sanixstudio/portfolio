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
          <MainNav setShowMenu={setShowMenu} isMobile={isMobile} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import { Button } from "flowbite-react";
// import Link from "next/link";
// import { AiOutlineHome } from "react-icons/ai";
// import { BiSolidContact } from "react-icons/bi";
// import { IoMdClose } from "react-icons/io";
// import { BsFillPersonFill, BsGearWideConnected } from "react-icons/bs";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { useState } from "react";

// const Navbar = () => {
//   const [open, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="md:hidden absolute right-0 z-10">
//         <Button
//           onClick={() => setIsOpen(true)}
//           className={`${!open ? "block" : "hidden"} md:hidden border-0`}
//         >
//           <HiMenuAlt2 size={28} />
//         </Button>
//         <Button
//           onClick={() => setIsOpen(false)}
//           className={`${open ? "block" : "hidden"} md:hidden border-0`}
//         >
//           <IoMdClose size={28} />
//         </Button>
//       </div>
//       <div
//         className={`${
//           open ? "block" : "hidden"
//         } md:hidden z-10 w-full h-screen flex-grow flex flex-col justify-center items-center gap-10`}
//       >
//         <Link href="/" className="flex gap-5 items-center w-[150px]">
//           <AiOutlineHome size={24} />
//           <span className="text-xl sm:text-2xl">Home</span>
//         </Link>
//         <Link href="/about" className="flex gap-5 items-center w-[150px]">
//           <BsFillPersonFill size={24} />
//           <span className="text-xl sm:text-2xl">About</span>
//         </Link>
//         <Link href="/work" className="flex gap-5 items-center w-[150px]">
//           <BsGearWideConnected size={24} />
//           <span className="text-xl sm:text-2xl">Work</span>
//         </Link>
//         <Link href="contact" className="flex gap-5 items-center w-[150px]">
//           <BiSolidContact size={24} />
//           <span className="text-xl sm:text-2xl">Contact</span>
//         </Link>
//       </div>
//       <div className="hidden fixed h-screen w-20 py-2 md:flex flex-col items-center">
//         <Link
//           href="/"
//           className="bg-slate-900 w-[60px] h-[60px] mt-3 -mb-3 flex justify-center items-center rounded-full border border-slate-600 hover:border-slate-300 ease-in transition-all"
//         >
//           <h1 className="text-3xl">AN</h1>
//         </Link>
//         <div className="flex-1 flex flex-col gap-8 items-center justify-center">
//           <Link href="/">
//             <AiOutlineHome size={24} />
//           </Link>
//           <Link href="/about">
//             <BsFillPersonFill size={24} />
//           </Link>
//           <Link href="/work">
//             <BsGearWideConnected size={24} />
//           </Link>
//           <Link href="contact">
//             <BiSolidContact size={24} />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
