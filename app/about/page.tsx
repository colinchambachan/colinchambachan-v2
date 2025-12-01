"use client";

import { RoughNotation } from "react-rough-notation";
import { useState, useEffect } from "react";

export default function About() {
  const [showAboutNotation, setShowAboutNotation] = useState(false);
  const [showSkillsNotation, setShowSkillsNotation] = useState(false);

  useEffect(() => {
    // Cascade the underlines
    setTimeout(() => setShowAboutNotation(true), 800);
    setTimeout(() => setShowSkillsNotation(true), 1600);
  }, []);
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="text-sm md:text-base text-gray-900 dark:text-gray-100">
        <div className="flex flex-col">
          <div>
            <h1
              className="text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-duration="600"
              id="title"
            >
              <RoughNotation
                type="underline"
                show={showAboutNotation}
                color="#2563eb"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="text-primary dark:text-blue-400">
                  &gt; About
                </span>
              </RoughNotation>
            </h1>
            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <p>
                Hey! I'm Colin, a{" "}
                <RoughNotation
                  type="highlight"
                  show={showAboutNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={800}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary dark:text-blue-600 font-bold">
                    Software Engineering
                  </span>
                </RoughNotation>{" "}
                student from{" "}
                <RoughNotation
                  type="highlight"
                  show={showAboutNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={900}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary dark:text-blue-600 font-bold">
                    McMaster University
                  </span>
                </RoughNotation>
                !
              </p>
              <p>
                I'm particularly interested in{" "}
                <RoughNotation
                  type="highlight"
                  show={showAboutNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={1000}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary dark:text-blue-600 font-bold">
                    Cloud, Data, and AI{" "}
                  </span>
                </RoughNotation>
                which I've explored through past internships, projects, and
                other opportunities. In my experience, I've received a lot of
                advice about being a "t-shaped" developer, so I'm also always
                looking to learn new things and diversify my skill set.
              </p>
              <div className="md:block">
                <p>
                  I'm recently worked at RBC Borealis, where I worked on two
                  tools under the{" "}
                  <a
                    className="text-primary dark:text-blue-400 font-bold underline underline-offset-4 inline-flex items-center gap-1"
                    href="https://rbcborealis.com/applications/lumina-platform/"
                    target="_blank"
                  >
                    Lumina Data Platform
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  . I've been able to work on projects both in{" "}
                  <RoughNotation
                    type="highlight"
                    show={showAboutNotation}
                    color="#dbeafe"
                    animationDuration={600}
                    animationDelay={1200}
                    multiline={true}
                    padding={2}
                  >
                    <span className="text-primary dark:text-blue-600 font-bold">
                      Data Engineering{" "}
                    </span>
                  </RoughNotation>
                  (creating a data pipeline to analyze cluster wastage) and{" "}
                  <RoughNotation
                    type="highlight"
                    show={showAboutNotation}
                    color="#dbeafe"
                    animationDuration={600}
                    animationDelay={1400}
                    multiline={true}
                    padding={2}
                  >
                    <span className="text-primary dark:text-blue-600 font-bold">
                      Generative AI{" "}
                    </span>
                  </RoughNotation>
                  (creating an LLM-based agent to migrate legacy code).
                </p>
              </div>
              <p>
                Outside of academics & programming, I'm usually occupied with an
                extracurricular, playing the guitar, or playing some sort of
                sport.
              </p>
              <p>
                I'm happy to speak more about any of my experiences, projects,
                or interests. Feel free to reach out on Linkedin or at{" "}
                <a
                  href="mailto:cchambachan@outlook.com"
                  className="text-primary dark:text-blue-400 font-bold underline underline-offset-4"
                  target="_blank"
                >
                  cchambachan@outlook.com
                </a>
              </p>
            </div>
            <h1
              className="text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-anchor="#title"
            >
              <RoughNotation
                type="underline"
                show={showSkillsNotation}
                color="#2563eb"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="text-primary dark:text-blue-400">
                  &gt; Skills
                </span>
              </RoughNotation>
            </h1>

            <div className="space-y-3 leading-relaxed">
              <div
                className="mb-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-anchor="#title"
              >
                <span className="font-bold">Languages: </span> Python,
                Javascript, Java, SQL, HTML, CSS, C, C++, Bash, MATLAB
              </div>
              <div
                className="mb-2"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="600"
                data-aos-anchor="#title"
              >
                <span className="font-bold">Technologies: </span> Node.js,
                Express.js, Spark, Hadoop, scikit-learn, Pandas, Next.js,
                React.js, Angular, Tailwind, JUnit
              </div>
              <div
                className="mb-2"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-anchor="#title"
              >
                <span className="font-bold">Tools: </span> AWS, Tableau, MySQL,
                PostgreSQL, Docker, Firebase, SonarQube, JIRA, Git, Linux,
                Figma, Arduino, Excel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
