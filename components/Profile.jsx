import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Phone, Download } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import ButtonB from "./ui/ButtonB";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { getProfile } from "@/lib/actions/portfolio.actions";
import Typing from "./type";
import { ClientSideMotion, ClientSideMotion2, ClientSideMotion3 } from "./clientSideMotion";
import { GitHub } from "@mui/icons-material";

const Profile = async () => {
  const profile = await getProfile();
  if (!profile || profile.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div
      id="about"
      className="text-black dark:text-white min-h-screen flex items-center p-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="md:container mx-auto gap-16 md:gap-4 lg:gap-0 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 lg:mb-0 mx-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Hi, It's{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {profile[0].userName} 👋
            </span>
          </h1>
          <Typing wordsq={profile[0].jobs} />
          <ClientSideMotion3>
          <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
            {profile[0].summary}
          </p>
          </ClientSideMotion3>
          <ClientSideMotion2>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <ButtonB
              title="Download CV"
              href=""
              color="bg-gray-950 dark:bg-gray-200 text-white dark:text-black"
              icon={<Download size={16} />}
            />
            <ButtonB
              title="Contact me"
              href="#contact"
              icon={<Phone size={16} />}
              color="bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <a
              href="https://www.linkedin.com/in/m-islam-benchaiba-4329b22a8/"

              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/islabenchaiba15"
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <GitHub size={18} />
            </a>
          </div>
          </ClientSideMotion2>

        </div>
        <div className="md:w-1/2 flex justify-center lg:justify-end">
          <ClientSideMotion>
            <Image
              src="/islam.jpg"
              alt="islam"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover"
            />
          </ClientSideMotion>
        </div>
      </div>
    </div>
  );
};

export default Profile;

