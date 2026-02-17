"use client";

import { useEffect } from "react";
import AsciiMorphHeader from "../_components/AsciiMorphHeader";

interface Project {
  name: string;
  link: string;
  time: string | null;
  desc: string;
  skills: Array<string>;
}

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      const AOS = (await import("aos")).default;

      AOS.init({
        easing: "ease-out-cubic",
        duration: 600,
        once: true,
        disable: false,
        offset: 100,
        delay: 0,
      });

      // Refresh after short delay
      setTimeout(() => {
        AOS.refresh();
      }, 50);
    };
    initAOS();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="w-full">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <AsciiMorphHeader
            text="Projects"
            startDelay={180}
            variant="blueprint"
            underlineColor="#2563eb"
          />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full min-h-[400px]"
          id="parent"
        >
          {projects?.map((project: Project, index: number) => {
            const cardDelay = index * 100;
            return (
              <div
                key={project.name}
                className={`card glass-card border-0 h-full w-full ${
                  project.link ? "cursor-pointer" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={`${cardDelay}`}
                data-aos-duration="600"
                data-aos-easing="ease-out-cubic"
              >
                <a
                  href={project.link}
                  target="_blank"
                  className="h-full"
                  aria-label={`Read more about ${project.name}`}
                >
                  <div
                    className={`card-body h-full p-5 sm:p-6 ${
                      project.link
                        ? "text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:text-primary dark:hover:text-blue-400"
                        : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h2 className="text-lg md:text-xl font-bold card-title line-clamp-2">
                          {project.name}
                        </h2>
                        {project.time && (
                          <div className="text-slate-600 dark:text-gray-400 text-sm">
                            {project.time}
                          </div>
                        )}
                      </div>
                      <div className="py-2 text-sm sm:text-base">
                        {project.desc}
                      </div>
                    </div>
                    <div className="card-actions mt-3 flex flex-wrap gap-2 justify-end">
                      {project.skills?.map((skill: string) => {
                        return (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-800"
                          >
                            {skill}
                          </span>
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
