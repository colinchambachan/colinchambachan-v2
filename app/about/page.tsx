"use client";

export default function About() {
  return (
    <div className="flex-col justify-items-center content-between">
      <div className="pt-12 w-screen px-12 xl:px-72 py-4 h-[screen-10rem]">
        <div className="flex text-left">
          <div className="mt-auto mb-auto">
            <h1
              className="text-4xl mb-2 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
            >
              &gt; about
            </h1>
            <div
              className="mb-6 md:mb-12"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Hey! I'm Colin, a Software Engineering student at McMaster
              University! <br></br>
              <br></br>
              I'm particularly interested in Cloud, Data, and AI which I've
              explored through past internships, projects, and other
              opportunities. In my experience, I've received a lot of advice
              about being a "t-shaped" developer, so I'm also always looking to
              learn new things and diversify my skill set. <br></br>
              <br></br>Outside of academics, I'm usually occupied with an
              extracurricular, playing the guitar, or playing some sort of
              sport.
            </div>
            <h1
              className="text-4xl mb-2 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="1200"
            >
              &gt; skills
            </h1>

            <div className="mb-2" data-aos="fade-left" data-aos-delay="1800">
              <span className="font-bold">Lanaguages: </span> Python,
              Javascript, Java, SQL, HTML, CSS, C, C++, Bash, MATLAB
            </div>
            <div className="mb-2" data-aos="fade-left" data-aos-delay="1900">
              <span className="font-bold">Technologies: </span> Node.js,
              Express.js, Spark, Hadoop, scikit-learn, Pandas, Next.js,
              React.js, Angular, Tailwind, JUnit
            </div>
            <div className="mb-2" data-aos="fade-left" data-aos-delay="2000">
              <span className="font-bold">Tools: </span> AWS, Tableau, MySQL,
              PostgreSQL, Firebase, SonarQube, JIRA, Git, Linux, Unix, Figma,
              Arduino, Microsoft Excel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
