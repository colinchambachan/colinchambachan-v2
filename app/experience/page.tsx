"use client";

import Aos from "aos";
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

  useEffect(() => {
    // Refresh AOS after experiences are fetched
    Aos.refresh();
  }, [experiences]);
  return (
    <div className="flex-col justify-items-center content-between">
      <AOSInit />
      <div className="pt-2  text-sm md:text-base w-screen px-6 xl:px-72 lg:py-12 h-[screen-10rem] overflow-hidden">
        <h1
          className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
          data-aos="fade-left"
        >
          &gt; experience
        </h1>
        {/* Use CSS grid to ensure only two cards per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
          id="parent"
          // data-aos="fade-left"
          // data-aos-delay="600"
        >
          {/* Repeatable card */}
          {experiences?.map((experience: Experience, index: number) => {
            const cardDelay = 600 + index * 100;
            return (
              <div
                key={experience.org + experience.role}
                className="card glass h-full w-100 m-2 cursor-pointer hover:text-primary transition ease-in-out duration-1000"
                data-aos-anchor="#parent"
                data-aos="fade-left"
                data-aos-delay={600 + index * 500}
              >
                <a href={experience.link} target="_blank" className="h-full">
                  <div className="card-body h-full">
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
