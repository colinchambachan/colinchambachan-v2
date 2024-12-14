"use client";

import { useEffect, useState } from "react";

interface Experience {
  org: string;
  role: string;
  time: string;
  desc: string;
  skills: Array<string>;
}

export default function Experience() {
  const [experiences, setExperience] = useState();

  useEffect(() => {
    // fetch the text file
    const fetchExperienceJSON = async () => {
      try {
        const response = await fetch("/data/experience.json");
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
    <div className="flex-col justify-items-center content-between">
      <div className="pt-12 text-sm md:text-base w-screen px-6 xl:px-72 py-4 h-[screen-10rem] overflow-hidden">
        <h1
          className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
          data-aos="fade-left"
        >
          &gt; experience
        </h1>
        {/* Use CSS grid to ensure only two cards per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          {/* Repeatable card */}
          {experiences?.map((experience: Experience) => {
            return (
              <div key={experience.org} className="card glass h-full w-100 m-2">
                <div className="card-body">
                  <h2 className="text-lg md:text-2xl card-title">
                    {experience.org}
                  </h2>
                  <div className="flex justify-between">
                    <div className="italic">{experience.role}</div>
                    <div className="italic">{experience.time}</div>
                  </div>
                  <div>{experience.desc}</div>
                  <div className="card-actions mt-auto justify-end">
                    {experience.skills?.map((skill: string) => {
                      return (
                        <div key={skill} className="badge badge-outline">
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
