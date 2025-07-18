"use client";

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
    projects && (
      <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <AOSInit />
        <div className="w-full">
          <h1
            className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
            data-aos="fade-left"
          >
            &gt; Projects
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full"
            id="parent"
          >
            {projects?.map((project: Project, index: number) => {
              const cardDelay = index < 2 ? 600 + index * 300 : 1200;
              return (
                <div
                  key={project.name}
                  className={`card glass h-full w-full shadow-sm hover:shadow-md transition-shadow duration-300 outline outline-gray-300 outline-opacity-10 ${
                    project.link ? "cursor-pointer" : ""
                  }`}
                  data-aos-anchor="#parent"
                  data-aos="fade-left"
                  data-aos-delay={cardDelay}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    className="h-full"
                    aria-label={`Read more about ${project.name}`}
                  >
                    <div
                      className={`card-body h-full p-4 sm:p-5 ${
                        project.link
                          ? "text-black transition-colors duration-300 ease-in-out hover:text-primary"
                          : ""
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h2 className="text-lg md:text-xl font-bold card-title line-clamp-2">
                            {project.name}
                          </h2>
                          {project.time && (
                            <div className="text-gray-600 text-sm">
                              {project.time}
                            </div>
                          )}
                        </div>
                        <div className="py-2 text-sm sm:text-base">
                          {project.desc}
                        </div>
                      </div>
                      <div className="card-actions mt-3 flex flex-wrap gap-1 justify-end">
                        {project.skills?.map((skill: string) => {
                          return (
                            <div
                              key={skill}
                              className="badge badge-outline text-xs py-1"
                            >
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
    )
  );
}
