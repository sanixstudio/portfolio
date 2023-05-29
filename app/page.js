"use client";
import { About, Contact, Header, Work } from "@/components";
import Hero from "@/components/Hero/Hero";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/theme";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <Flowbite theme={{ customTheme }}>
      {/* // <NextUIProvider> */}
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-scroll scroll-bar-hide max-w-[1220px] mx-auto bg-gray-5-- backdrop-opacity-30">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      {/* // </NextUIProvider> */}
    </Flowbite>
  );
}
