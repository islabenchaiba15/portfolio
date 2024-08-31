"use client";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <nav className="absolute top-0 left-0 right-0 p-4">
        <ul className="flex justify-center space-x-4">
          {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      {/* <div className="border border-pink-300 rounded-full h-[250px] w-[250px] absolute animate-ping"></div>
      <div className="border border-pink-300 rounded-full h-[180px] w-[180px] absolute animate-ping"></div>
      <div className="border border-gray-400 rounded-full h-[500px] w-[500px] absolute opacity-10 animate-pulse "></div> */}
      <div className=" relative">
        <div className="w-24 h-24 rounded-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <Image
          src={"/benchaiba.jpg"}
          alt="islam"
          width={150}
          height={150}
          className="rounded-full "
        />
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
          Making the impossible possible
        </p>
      </div>
    </div>
  );
};

export default Navbar;
