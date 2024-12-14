"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import { AOSInit } from "../_components/aos";

interface Project {
  name: string;
  link: string;
  time: string;
  desc: string;
  skills: Array<string>;
}

export default function Projects() {
  const [projects, setProjects] = useState<Array<Project>>();
  useEffect(() => {
    // fetch the text file
    const fetchProjectJSON = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching the file:", error);
      }
    };

    fetchProjectJSON();
  }, []);

  return (
    <div className="flex-col justify-items-center content-between">
      <AOSInit />
      <div className="pt-2  text-sm md:text-base w-screen px-6 xl:px-72 lg:py-12 h-[screen-10rem] overflow-hidden">
        <h1
          className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
          data-aos="fade-left"
        >
          &gt; projects
        </h1>
        {/* Use CSS grid to ensure only two cards per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
          id="parent"
          // data-aos="fade-left"
          // data-aos-delay="600"
        >
          {/* Repeatable card */}
          {projects?.map((project: Project, index: number) => {
            const cardDelay = index < 2 ? 600 + index * 400 : 1400;
            return (
              <div
                key={project.name}
                className={`card glass h-full w-100 m-2  ${
                  project.link
                    ? " cursor-pointer hover:text-primary transition ease-in-out duration-1000"
                    : ""
                }`}
                data-aos-anchor="#parent"
                data-aos="fade-left"
                data-aos-delay={cardDelay}
              >
                <a href={project.link} target="_blank" className="h-full">
                  <div className="card-body h-full">
                    <div className="flex justify-between">
                      <h2 className="text-lg md:text-2xl card-title">
                        {project.name}
                      </h2>
                      {project.time && (
                        <div className="italic">{project.time}</div>
                      )}
                    </div>

                    <div>{project.desc}</div>
                    <div className="card-actions mt-auto justify-end">
                      {project.skills?.map((skill: string) => {
                        return (
                          <div key={skill} className="badge badge-outline">
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
