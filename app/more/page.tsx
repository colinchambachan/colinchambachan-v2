"use client";

export default function More() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="w-full text-sm md:text-base">
        <div className="flex flex-col">
          <div>
            <h1
              className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              id="parent"
            >
              &gt; Google Developer Groups
            </h1>
            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor="#parent"
            >
              <p>
                One of my main involvements outside of school and work is as{" "}
                <span className="text-primary font-bold">
                  Vice-President @ GDG McMaster.
                </span>{" "}
                In collaboration with Google, GDGs provide learning
                opportunities for aspiring developers, allowing them to gain
                hands-on experience, develop essential skills, and build a
                strong foundation for a tech career.
              </p>
              <p>
                As one of the largest chapters in North America, we've been very
                fortunate to host successful events such resume roasts,
                networking and leadership panels, intro to various tech nights,
                and even an annual hackathon with{" "}
                <span className="text-primary font-bold">150+</span> attendees.
                You can find out more about us{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href="https://gdg.community.dev/gdg-on-campus-mcmaster-university-hamilton-canada/"
                  target="_blank"
                >
                  here
                </a>
              </p>
              <p>
                As a result of this experience, I got to attend{" "}
                <span className="text-primary font-bold">
                  Google Cloud Next '23
                </span>{" "}
                in{" "}
                <span className="text-primary font-bold">
                  San Francisco, California
                </span>
                . It was extremely interesting to see the newest innovations in
                Data Services with Gen AI, and how companies are able to deliver
                them at scale by leveraging the cloud. Naturally, this played a
                big part in kick-starting my passion for Cloud, Data, and AI.
                You can read more about Google Cloud Next '23{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href="https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next-23"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </div>
            <h1
              className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-anchor="#parent"
            >
              &gt; Guitar & Music
            </h1>

            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-anchor="#parent"
            >
              <p>
                Music has been a hobby of mine for quite a while, as I started
                to learn the piano as a child, before later learning the guitar.
                Starting as a Covid project, some of my friends and I have been
                putting together covers of songs, which can be found{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href="https://www.instagram.com/monkey.hut/"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </div>
            <h1
              className="text-2xl md:text-4xl mb-4 md:mb-6 text-primary font-bold"
              data-aos="fade-left"
              data-aos-delay="2400"
              data-aos-anchor="#parent"
            >
              &gt; Reading
            </h1>

            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="3000"
              data-aos-anchor="#parent"
            >
              <p>
                Reading is another interest of mine I try to keep up with. My
                favourite book is{" "}
                <span className="italic">Ego is the Enemy</span> by Ryan
                Holiday. Especially in this industry, where we're continually
                learning and adapting, I think it's all the more important to
                have an open mindset. Whether an experienced developer or a new
                intern, I believe humility is extremely important to long-term
                growth and is something I try to implement into my engineering &
                leadership practices.
              </p>
              <p>
                I'm currently reading through{" "}
                <span className="italic">The Algebra of Happiness</span> by
                Scott Galloway, and my next planned read is{" "}
                <span className="italic">Thinking, Fast and Slow</span> by
                Daniel Kahneman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
