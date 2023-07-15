import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center max-w-[400px] mx-auto pb-10">
      <Image
        src={"/images/adi.png"}
        width={50}
        height={50}
        alt="SanixStudio"
        className="rounded-full bg-slate-600 p-1 m-1"
      />
      <span className="text-slate-400 text-xs">&copy;SanixStudio 2023</span>
      <span className="text-slate-400 text-xs">Design & Created by SanixStudio</span>
    </div>
  );
};

export default Footer;
