"use client";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AuroraBackground } from "./ui/aurora-background";
const Navbar = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi,my name is Islam Benchaiba",
      "Guy-who-loves-cats.jsx",
      "<ButLovesCodingMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="Home" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="border border-pink-300 rounded-full h-[250px] w-[250px] absolute animate-ping"></div>
      <div className="border border-pink-300 rounded-full h-[180px] w-[180px] absolute animate-ping"></div>
      <div className="border border-gray-400 rounded-full h-[500px] w-[500px] absolute opacity-10 animate-pulse "></div>
      <div className=" relative">
        <div className="w-24 h-24 rounded-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-24 h-24 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/benchaiba.jpg"
            alt="islam"
            width={150}
            height={150}
            className="rounded-full"
            priority
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-xs uppercase tracking-[8px] text-gray-500 mb-2">
          Software Engineer
        </p>
        <h1 className="text-2xl font-bold mb-4">
          {text}
          <Cursor cursorColor="#DE3163" />
        </h1>
        <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2">
        Crafted with love and precision
        </p>
      </div>
    </div>
  );
};

export default Navbar;
