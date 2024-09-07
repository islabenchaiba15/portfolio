import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { getSkills, getSoftSkills } from "@/lib/actions/portfolio.actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientSideMotion2 } from "./clientSideMotion";
import ShinyButton from "./magicui/shiny-button";
import BoxReveal from "./magicui/box-reveal";

export default async function Skills() {
  const skills = await getSkills();
  const softSkills = await getSoftSkills();

  if (!skills || skills.length === 0 || !softSkills || softSkills.length === 0) {
    return <div>No skills found</div>;
  }

  const SkillGrid = ({ skills }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-center">
      {skills.map((skill, index) => (
        <ClientSideMotion2 key={index}>
          <div className="flex flex-col items-center">
            <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 bg-gray-50 rounded-full transition-all duration-300 ease-in-out">
                <p className="text-xs font-semibold dark:text-black">{skill.percentage}%</p>
              </div>
              <img
                src={urlFor(skill.image).url()}
                alt={skill.name}
                width={32}
                height={32}
                className="transition duration-300 ease-out hover:grayscale"
              />
            </div>
            <span className="text-xs mt-2 text-center">{skill.name}</span>
          </div>
        </ClientSideMotion2>
      ))}
    </div>
  );

  return (
    <div id="skills" className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center gap-4 my-4">
        <ShinyButton text="Skills" />
        <BoxReveal boxColor="#5046e6" duration={0.7}>
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">My Skills</h1>
        </BoxReveal>
        <ClientSideMotion2>
          <p className="text-center mb-8 mt-4">
            I am skilled in web development and software engineering, with hands-on experience in modern technologies.
          </p>
        </ClientSideMotion2>
        <Tabs defaultValue="hard" className="w-fit">
          <TabsList className="mb-4 flex justify-center w-fit mx-auto">
            <TabsTrigger value="hard">Hard Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="hard">
            <SkillGrid skills={skills} />
          </TabsContent>
          <TabsContent value="soft">
            <SkillGrid skills={softSkills} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}