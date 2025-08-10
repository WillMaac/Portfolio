"use client";
import { Header } from "../Header/Header";
import { HeroContent } from "../HeroContent/HeroContent";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <Header/>

      <main className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl z-10 mt-8 w-full">
        <HeroContent/>
      </main>
    </div>
  );
}