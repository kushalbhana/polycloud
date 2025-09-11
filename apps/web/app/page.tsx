"use client";

import { Button } from "@/components/ui/button";
import { HeroCircuit } from "../components/home/hero-circuit";
import { SpotlightPreview } from "@/components/home/spotlight";
import { NavbarDemo } from "@/components/home/navbar";

export default function Home() {
  return (
    <div className="relative w-screen h-screen dark:bg-black overflow-hidden">
      <div className="absolute inset-0 z-20 mt-5">
        <NavbarDemo />
      </div>
      {/* Background Spotlight */}
      <div className="absolute inset-0 z-0">
        <SpotlightPreview />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-amber-50 -my-32">
        {/* Buttons */}
        <div className="flex py-8 gap-6">
          <Button className="bg-amber-700 rounded-2xl h-12 w-40">Get Started</Button>
          <Button className="bg-gray-600 rounded-2xl h-12 w-40">Documentation</Button>
        </div>
      </div>

      {/* Hero Circuit */}
      <div className="absolute inset-0 z-5">
        <HeroCircuit />
      </div>
    </div>
  );
}
