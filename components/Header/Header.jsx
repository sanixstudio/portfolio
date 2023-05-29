"use client";
import { Button } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100/10 sticky w-full max-w-[1440px] flex-row-between p-4 items-center mx-auto">
      <a href="/">
        <button className="bt-g">
          <h1 className="text-2xl md:text-3xl font-bold">AN</h1>
        </button>
      </a>
      <ul className="hidden md:flex gap-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>user</div>
    </div>
  );
};

export default Header;
