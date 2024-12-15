"use client";

export default function More() {
  return (
    <div className="flex-col justify-items-center content-between">
      <div className="pt-2 lg:py-12 text-sm md:text-base  px-6 xl:px-72 py-4 h-[screen-10rem] overflow-hidden">
        <div className="flex text-left">
          <div className="mt-auto mb-auto">
            <h1
              className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              id="parent"
            >
              &gt; Google Developer Groups
            </h1>
            <div
              className="mb-6 md:mb-12"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor="#parent"
            >
              One of my main involvements outside of school and work is as{" "}
              <span className="text-primary font-bold">
                {" "}
                Vice-President @ GDG McMaster.{" "}
              </span>{" "}
              {/* <span className="hidden md:block"> */}
              In collaboration with Google, GDGs provide learning opportunities
              for aspiring developers, allowing them to gain hands-on
              experience, develop essential skills, and build a strong
              foundation for a tech career.
              {/* </span> */}
              <br></br> <br></br>
              As one of the largest chapters in North America, we've been very
              fortunate to host successful events such resume roasts, networking
              and leadership panels, intro to various tech nights, and even an
              annual hackathon with{" "}
              <span className="text-primary font-bold">150+</span> attendees.
              You can find out more about us{" "}
              <a
                className="text-primary font-bold underline underline-offset-4"
                href="https://gdg.community.dev/gdg-on-campus-mcmaster-university-hamilton-canada/"
                target="_blank"
              >
                here{" "}
              </a>
              <br></br> <br></br>
              As a result of this experience, I got to attend{" "}
              <span className="text-primary font-bold">
                Google Cloud Next '23
              </span>{" "}
              in{" "}
              <span className="text-primary font-bold">
                San Francisco, California{" "}
              </span>
              . It was extremely interesting to see the newest innovations in
              Data Services with Gen AI, and how companies are able to deliver
              them at scale by leveraging the cloud. Naturally, this played a
              big part in kick-starting my passion for Cloud, Data, and AI. You
              can read more about Google Cloud Next '23{" "}
              <a
                className="text-primary font-bold underline underline-offset-4"
                href="https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next-23"
              >
                here{" "}
              </a>
            </div>
            <h1
              className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-anchor="#parent"
            >
              &gt; Guitar & Music
            </h1>

            <div
              className="mb-6 md:mb-12"
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-anchor="#parent"
            >
              Music has been a hobby of mine for quite a while, as I started to
              learn the piano as a child, before later learning the guitar.
              Starting as a Covid project, some of my friends and I have been
              putting together covers of songs, which can be found{" "}
              <a
                className="text-primary font-bold underline underline-offset-4"
                href="https://www.instagram.com/monkey.hut/"
                target="_blank"
              >
                here{" "}
              </a>
            </div>
            <h1
              className="text-2xl md:text-4xl mb-2 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="2400"
              data-aos-anchor="#parent"
            >
              &gt; Reading
            </h1>

            <div
              className="mb-2"
              data-aos="fade-left"
              data-aos-delay="3000"
              data-aos-anchor="#parent"
            >
              Reading is another interest of mine I try to keep up with. My
              favourite book is <span className="italic">Ego is the Enemy</span>{" "}
              by Ryan Holiday. Especially in this industry, where we're
              continually learning and adapting, I think it's all the more
              important to have an open mindset. Whether an experienced
              developer or a new intern, I believe humility is extremely
              important to long-term growth and is something I try to implement
              into my leadership & engineering practices. <br /> <br /> I'm
              currently reading through{" "}
              <span className="italic">The Algebra of Happiness</span> by Scott
              Galloway, and my next planned read is{" "}
              <span className="italic">Thinking, Fast and Slow</span> by Daniel
              Kahneman
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
