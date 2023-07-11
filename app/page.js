"use client";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/theme";
import { Hero } from "@/components";

export default function Home() {
  return (
    <Flowbite theme={{ customTheme }}>
      <main className="max-w-[1220px] mx-auto bg-gray-5-- backdrop-opacity-30">
        <Hero />
      </main>
    </Flowbite>
  );
}
