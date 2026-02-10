"use client";

import { useEffect } from "react";
import AsciiMorphHeader from "../_components/AsciiMorphHeader";

interface Experience {
  org: string;
  role: string;
  link: string;
  time: string;
  desc: string;
  skills: Array<string>;
}

interface ExperienceClientProps {
  experiences: Experience[];
}

export default function ExperienceClient({
  experiences,
}: ExperienceClientProps) {
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
            text="Experience"
            startDelay={180}
            variant="blueprint"
            underlineColor="#2563eb"
          />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full min-h-[400px]"
          id="parent"
        >
          {experiences?.map((experience: Experience, index: number) => {
            const cardDelay = index * 100;
            return (
              <div
                key={experience.org + experience.role}
                className="card glass-card border-0 h-full w-full"
                data-aos="fade-up"
                data-aos-delay={`${cardDelay}`}
                data-aos-duration="600"
                data-aos-easing="ease-out-cubic"
              >
                <a
                  href={experience.link}
                  target="_blank"
                  className="h-full"
                  aria-label={`Read more about ${experience.org} - ${experience.role}`}
                >
                  <div className="card-body h-full p-5 sm:p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:text-primary dark:hover:text-blue-400">
                    <div className="space-y-2">
                      <h2 className="text-lg md:text-xl font-bold card-title line-clamp-2">
                        {experience.org}
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                        <div className="font-medium">{experience.role}</div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {experience.time}
                        </div>
                      </div>
                      <div className="py-2 text-sm sm:text-base">
                        {experience.desc}
                      </div>
                    </div>
                    <div className="card-actions mt-3 flex flex-wrap gap-2 justify-end">
                      {experience.skills?.map((skill: string) => {
                        return (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-800"
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
