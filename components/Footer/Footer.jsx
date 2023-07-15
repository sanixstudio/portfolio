import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col max-w-[400px]">
      <div>
        <Image src={"/images/adi.png"} width={100} height={100} alt="" />
        <span>&copy;SanixStudio 2023</span>
      </div>
      <span>Design & Created by SanixStudio</span>
    </div>
  );
};

export default Footer;
