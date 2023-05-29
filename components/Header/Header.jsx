"use client";
import React from "react";

const Header = () => {
  return (
    <div className="sticky w-full max-w-[1220px] flex-row-between p-4 items-center  mx-auto">
      <a href="/">
        <button className="rounded-full bg-teal-700 bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-[50px] h-[50px]">
          <h1 className="text-2xl md:text-3xl">AN</h1>
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
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
