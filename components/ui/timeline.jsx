"use client";

import { getExperience } from "@/lib/actions/portfolio.actions";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BoxReveal from "../magicui/box-reveal";
import ShinyButton from "../magicui/shiny-button";
import { ClientSideMotion2 } from "../clientSideMotion";

export default function Timeline() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const fetchedExperiences = await getExperience();
        setExperiences(fetchedExperiences);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!experiences || experiences.length === 0) {
    return <div>No experiences found</div>;
  }
  const phrase = `experience`;
  return (
    <section
      id="experience"
      className="w-full max-w-[1200px] mx-auto my-8 md:my-20 "
    >
      <div className="flex justify-center my-4">
        <ShinyButton text="Experience" className=""/>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <BoxReveal boxColor="#5046e6" duration={0.7}>
          <h1 className="text-cneter font-bold lg:text-4xl md:text-3xl text-2xl">
            My Experience
          </h1>
        </BoxReveal>
        <ClientSideMotion2>

        <p className="text-center mb-12 mt-4 container">
        My professional journey has been marked by hands-on internships
         and significant academic achievements . 
        </p>
        </ClientSideMotion2>

      </div>
      <VerticalTimeline lineColor="#C0C0C0" layout="2-columns" animate={true}>
        {experiences.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "0.8rem 1.2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={item.date}
            dateClassName="font-semibold text-gray-600"
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={urlFor(item.img).url()}
                  alt={`${item.title} icon`}
                  width={55}
                  height={55}
                  className="object-contain rounded-full"
                />
              </div>
            }
            iconStyle={{
              background: "white",
              fontSize: "1.1rem",
            }}
            className="vertical-timeline-element--work"
            >
            <div className="">
              <h3 className="font-medium text-gray-900 -mt-1 text-lg">
                {item.title}
              </h3>
              <p
                className="text-gray-800/80 font-medium font-base"
                style={{ margin: 0 }}
              >
                {item.location}
              </p>
            </div>
            <ul className="list-disc ml-4 space-y-1 mt-2">
              {item.points.map((point, i) => (
                <li key={i} className="text-gray-700/70 pl-1 text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
