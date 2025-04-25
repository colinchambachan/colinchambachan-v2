"use client";

import { useEffect, useState } from "react";
import { AOSInit } from "../_components/aos";

interface Experience {
  org: string;
  role: string;
  link: string;
  time: string;
  desc: string;
  skills: Array<string>;
}

export default function Experience() {
  const [experiences, setExperience] = useState<Array<Experience>>();
  useEffect(() => {
    // fetch the text file
    const fetchExperienceJSON = async () => {
      try {
        const response = await fetch("/data/experiences.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const data = await response.json();
        setExperience(data);
      } catch (error) {
        console.error("Error fetching the file:", error);
      }
    };

    fetchExperienceJSON();
  }, []);

  return (
    experiences && (
      <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <AOSInit />
        <div className="w-full">
          <h1
            className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
            data-aos="fade-left"
          >
            &gt; Experience
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full"
            id="parent"
          >
            {experiences?.map((experience: Experience, index: number) => {
              const cardDelay = 600 + index * 300;
              return (
                <div
                  key={experience.org + experience.role}
                  className="card glass h-full w-full shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos-anchor="#parent"
                  data-aos="fade-left"
                  data-aos-delay={cardDelay}
                >
                  <a
                    href={experience.link}
                    target="_blank"
                    className="h-full"
                    aria-label={`Read more about ${experience.org} - ${experience.role}`}
                  >
                    <div className="card-body h-full p-4 sm:p-5 text-black transition-colors duration-300 ease-in-out hover:text-primary">
                      <div className="space-y-2">
                        <h2 className="text-lg md:text-xl font-bold card-title line-clamp-2">
                          {experience.org}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                          <div className="font-medium">{experience.role}</div>
                          <div className="text-gray-600">{experience.time}</div>
                        </div>
                        <div className="py-2 text-sm sm:text-base">
                          {experience.desc}
                        </div>
                      </div>
                      <div className="card-actions mt-3 flex flex-wrap gap-1 justify-end">
                        {experience.skills?.map((skill: string) => {
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
