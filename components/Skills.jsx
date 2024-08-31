import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { getSkills } from "@/lib/actions/portfolio.actions";
import dynamic from "next/dynamic";
import Timeline from "./ui/timeline";
// const Timeline = dynamic(() => import('./ui/timeline'), { ssr: false });

export default async function Skills() {

    const skills = await getSkills();
    if (!skills || skills.length === 0) {
      return <div>No skills found</div>;
    }
  

  return (
    <div className="container mx-auto flex flex-col gap-8 items-center mt-10">
      <h1 className="">Skills</h1>
      <div className="mb-8 lg:mb-0">
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative w-14 h-14  lg:w-18 lg:h-18 mx-3 rounded-full flex items-center justify-center text-2xl bg-gray-100 cursor-pointer"
            >
              <div className="absolute flex items-center justify-center opacity-0 hover:bg-gray-50 w-full h-full hover:opacity-90 rounded-full transitio-all duration-300 ease-in-out">
                <p className="text-sm font-semibold">{skill.percentage} %</p>
              </div>
              <span className="icon hover:filter hover:grayscale transition duration-300 ease-out">
                <img src={urlFor(skill.image).url()} alt={skill.name} width={32} height={32} 
                className="filter "
                />
              </span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs mt-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mb-8 lg:mb-0 flex items-center justify-center">
        <Timeline />
      </div>
    </div>
  );
}
