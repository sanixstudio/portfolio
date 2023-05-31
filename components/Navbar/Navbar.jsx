import Image from "next/image";
import React from "react";

export const NavLink = ({ title, href }) => {
  return (
    <li>
      <a
        href={href}
        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
};

export const MainNav = () => {
  return (
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="border ">
        <NavLink title="Home" href="/" />
        <NavLink title="About" href="#" />
        <NavLink title="Work" href="#" />
        <NavLink title="Contact" href="#" />
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav class="dark:bg-gray-900 fixed h-screen flex bg-white/20 backdrop-blur-md z-50 box">
      <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-center mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <Image
            width={40}
            height={40}
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <MainNav />
      </div>
    </nav>
  );
};

export default Navbar;
