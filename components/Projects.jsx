import { GitHub } from "@mui/icons-material";
import { Globe } from "lucide-react";
import React from "react";
import ShinyButton from "./magicui/shiny-button";
import { getProjects } from "@/lib/actions/portfolio.actions";
import { urlFor } from "@/sanity/lib/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import BoxReveal from "./magicui/box-reveal";
import { ClientSideMotion2 } from "./clientSideMotion";

const Projects = async () => {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  const frontendProjects = projects.filter(
    (project) => project.projectType === "frontend"
  );
  const fullstackProjects = projects.filter(
    (project) => project.projectType === "fullstack"
  );
  const mobileProjects = projects.filter(
    (project) => project.projectType === "mobileApp"
  );

  const ProjectGrid = ({ projects }) => (
    <ClientSideMotion2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              priority={true}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{project.timeframe}</p>
            <p className="mb-4 h-[150px]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 mt-3 ">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="flex justify-start gap-2 ">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  className="text-white hover:opacity-75 font-semibold justify-between gap-1 flex items-center bg-black p-2 rounded-lg"
                >
                  <Globe size={18} />
                  Website
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="text-white hover:opacity-75 font-semibold justify-between gap-1 flex items-center bg-black p-2 rounded-lg "
                >
                  <GitHub size={18} />
                  Source
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </ClientSideMotion2>
  );

  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center my-4">
          <ShinyButton text="Projects" className="" />
        </div>
        <BoxReveal boxColor="#5046e6" className="my-2" duration={0.7}>
          <h1 className="text-cneter font-bold lg:text-4xl md:text-3xl text-2xl">
            Check out my latest work
          </h1>
        </BoxReveal>
        <ClientSideMotion2>
          <p className="text-center mb-8 mt-4">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites,
            <span className="font-bold">
              there is more and more i didn't share it here.
            </span>
          </p>
        <Tabs defaultValue="frontend" className="w-full ">
          <TabsList className="mb-4 flex items-center w-fit mx-auto">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <ProjectGrid projects={frontendProjects} />
          </TabsContent>
          <TabsContent value="fullstack">
            <ProjectGrid projects={fullstackProjects} />
          </TabsContent>
          <TabsContent value="mobile">
            <ProjectGrid projects={mobileProjects} />
          </TabsContent>
        </Tabs>
        </ClientSideMotion2>

      </div>
    </section>
  );
};

export default Projects;
