"use client";
import { About, Contact, Header, Navbar, Work } from "@/components";
import Hero from "@/components/Hero/Hero";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/theme";

export default function Home() {
  return (
    <Flowbite theme={{ customTheme }}>
      {/* <Header /> */}
      <div className="flex">
        {/* <Navbar /> */}
        <main className="max-w-[1220px] mx-auto bg-gray-5-- backdrop-opacity-30">
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </Flowbite>
  );
}
