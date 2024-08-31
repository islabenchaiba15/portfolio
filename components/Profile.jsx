import React from "react";
import { Linkedin, Github, Phone, Download } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import Button from "./ui/Button";
import Image from "next/image";

const Profile = () => {
  const words = [
    "frontend developer",
    "full-stack web developer",
    "mobile app developer",
  ];

  return (
    <div className="  bg-gradient-to-r from-purple-100 to-pink-100 text-black min-h-screen flex items-center p-4 md:p-8 overflow-hidden">
      <div className=" mx-auto container flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0 mx-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Hi, It's <span>Islam 👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-4">
            I'm a{" "}
            <span className="font-extrabold inline-block">
              {/* <FlipWords words={words} /> */}
            </span>
          </h2>
          <p className="mb-6 text-sm md:text-base">
            With over 5 years of experience in computer science and programming,
            I specialize in creating scalable, efficient, and user-friendly
            applications and websites. My expertise lies in React (Next.js) and
            React Native, where I focus on delivering high-quality, innovative
            solutions. I'm passionate about leveraging the latest technologies
            to build responsive, intuitive user experiences and am always eager
            to tackle new challenges in the ever-evolving tech landscape.
          </p>

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <Button
              title="Download CV"
              color="bg-gray-950"
              icon={<Download size={16} />}
            />
            <Button
              title="Contact me"
              icon={<Phone size={16} />}
              color="bg-white"
            />
            <a href="#" className="bg-white p-2 rounded-full text-black hover:text-gray-500">
              <Linkedin size={18}/>
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-black hover:text-gray-500">
              <Github size={18}/>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-cyan-400 rounded-full relative overflow-hidden">
            <Image
              src="/islam.jpg"
              alt="islam"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;