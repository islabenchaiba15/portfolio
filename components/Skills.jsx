import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { getSkills, getSoftSkills } from "@/lib/actions/portfolio.actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Timeline from "./ui/timeline";
import BoxReveal from "./magicui/box-reveal";
import ShinyButton from "./magicui/shiny-button";
import { ClientSideMotion2 } from "./clientSideMotion";
// const Timeline = dynamic(() => import('./ui/timeline'), { ssr: false });

export default async function Skills() {
  const skills = await getSkills();
  const softSkills = await getSoftSkills();
  if (!skills || skills.length === 0) {
    return <div>No skills found</div>;
  }

  if (!softSkills || softSkills.length === 0) {
    return <div>No soft skills found</div>;
  }

  return (
    <div
      id="skills"
      className="container mx-auto flex flex-col items-center gap-5 mt-10"
    >
      <div className="flex flex-col gap-4 items-center my-4">
        <ShinyButton text="Skills" className="" />
        <BoxReveal boxColor="#5046e6" duration={0.7}>
          <h1 className="text-cneter font-bold lg:text-4xl md:text-3xl text-2xl">
            My Skills
          </h1>
        </BoxReveal>
        <ClientSideMotion2>
          <p className="text-center mb-8 mt-4 ">
            i am Skilled in web development, software engineering, with hands-on
            experience in modern technologies.
          </p>
        </ClientSideMotion2>
        <Tabs
          defaultValue="hard"
          className="w-full flex flex-col items-center gap-4"
        >
          <TabsList>
            <TabsTrigger value="hard">hard skills</TabsTrigger>
            <TabsTrigger value="soft">soft skills</TabsTrigger>
          </TabsList>
          <TabsContent value="hard">
            <div className="mb-8 lg:mb-0">
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-8">
                {skills.map((skill, index) => (
                  <ClientSideMotion2 key={index}>
                    <div className="relative w-14 h-14  lg:w-18 lg:h-18 mx-3 rounded-full flex items-center justify-center text-2xl bg-gray-100 cursor-pointer">
                      <div className="absolute flex items-center justify-center opacity-0 hover:bg-gray-50 w-full h-full hover:opacity-90 rounded-full transitio-all duration-300 ease-in-out">
                        <p className="text-sm font-semibold dark:text-black">
                          {skill.percentage} %
                        </p>
                      </div>
                      <span className="icon hover:filter hover:grayscale transition duration-300 ease-out">
                        <img
                          src={urlFor(skill.image).url()}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="filter "
                        />
                      </span>
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs mt-1">
                        {skill.name}
                      </span>
                    </div>
                  </ClientSideMotion2>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="soft">
            <div className="mb-8 lg:mb-0">
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-8">
                {softSkills.map((skill, index) => (
                  <ClientSideMotion2 key={index}>
                    <div
                      key={index}
                      className="relative w-14 h-14  lg:w-18 lg:h-18 mx-3 rounded-full flex items-center justify-center text-2xl bg-gray-100 cursor-pointer"
                    >
                      <div className="absolute flex items-center justify-center opacity-0 hover:bg-gray-50 w-full h-full hover:opacity-90 rounded-full transitio-all duration-300 ease-in-out">
                        <p className="text-sm font-semibold">
                          {skill.percentage} %
                        </p>
                      </div>
                      <span className="icon hover:filter hover:grayscale transition duration-300 ease-out">
                        <img
                          src={urlFor(skill.image).url()}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="filter "
                        />
                      </span>
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs mt-1">
                        {skill.name}
                      </span>
                    </div>
                  </ClientSideMotion2>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
