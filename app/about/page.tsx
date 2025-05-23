"use client";

export default function About() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="text-sm md:text-base">
        <div className="flex flex-col">
          <div>
            <h1
              className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              id="title"
            >
              &gt; About
            </h1>
            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <p>
                Hey! I'm <span className="text-primary font-bold">Colin</span>,
                a Software Engineering student from McMaster University!
              </p>
              <p>
                I'm particularly interested in{" "}
                <span className="text-primary font-bold">
                  Cloud, Data, and AI{" "}
                </span>
                which I've explored through past internships, projects, and
                other opportunities. In my experience, I've received a lot of
                advice about being a "t-shaped" developer, so I'm also always
                looking to learn new things and diversify my skill set.
              </p>
              <div className="md:block">
                <p>
                  I'm currently working at RBC Borealis, where I'm working on
                  two tools under the{" "}
                  <a
                    className="text-primary font-bold underline underline-offset-4"
                    href="https://rbcborealis.com/applications/lumina-platform/"
                    target="_blank"
                  >
                    Lumina Data Platform{" "}
                  </a>
                  . I've been able to work on projects both in{" "}
                  <span className="text-primary font-bold">
                    Data Engineering{" "}
                  </span>
                  (creating a data pipeline to analyze cluster wastage) and{" "}
                  <span className="text-primary font-bold">Generative AI </span>
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
                  href="mailto:colin.chambachan@gmail.com"
                  className="text-primary font-bold underline underline-offset-4"
                  target="_blank"
                >
                  colin.chambachan@gmail.com
                </a>
              </p>
            </div>
            <h1
              className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-anchor="#title"
            >
              &gt; Skills
            </h1>

            <div className="space-y-3 leading-relaxed">
              <div
                className="mb-2"
                data-aos="fade-left"
                data-aos-delay="1800"
                data-aos-anchor="#title"
              >
                <span className="font-bold">Languages: </span> Python,
                Javascript, Java, SQL, HTML, CSS, C, C++, Bash, MATLAB
              </div>
              <div
                className="mb-2"
                data-aos="fade-left"
                data-aos-delay="1900"
                data-aos-anchor="#title"
              >
                <span className="font-bold">Technologies: </span> Node.js,
                Express.js, Spark, Hadoop, scikit-learn, Pandas, Next.js,
                React.js, Angular, Tailwind, JUnit
              </div>
              <div
                className="mb-2"
                data-aos="fade-left"
                data-aos-delay="2000"
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
