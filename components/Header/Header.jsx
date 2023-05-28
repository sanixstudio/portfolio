"use client";
import { Button } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-[1440px] fixed flex-row-between p-4 items-center mx-auto">
      <a href="/">
        <Button pill gradientMonochrome="lime">
          <h1 className="text-3xl font-bold">AN</h1>
        </Button>
      </a>
      <ul className="flex gap-10">
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
