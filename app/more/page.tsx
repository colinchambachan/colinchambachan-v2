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
                As a result of this experience, I first got to attend{" "}
                <span className="text-primary font-bold">
                  Google Cloud Next '23
                </span>{" "}
                in{" "}
                <span className="text-primary font-bold">
                  San Francisco, California
                </span>{" "}
                and{" "}
                <span className="text-primary font-bold">Google IO '25</span> in{" "}
                <span className="text-primary font-bold">
                  Mountain View, California
                </span>
                . It was extremely interesting to see the newest innovations in
                Data Services with Gen AI, and how companies are able to deliver
                them at scale by leveraging the cloud. We got the change to
                connect with Google Engineers, and I was quite interested in the
                working being done on the Gemini team. Naturally, this played a
                big part in kick-starting my passion for Cloud, Data, and AI.
                You can read more about Google Cloud Next '23{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href="https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next-23"
                  target="_blank"
                >
                  here
                </a>{" "}
                and more about Google IO '25{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href="https://io.google/2025/"
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

              {/* Reading Progress Table */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold text-primary">
                  Current Reading List
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">
                          Status
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">
                          Book Title
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">
                          Author
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium text-black dark:text-white">
                          Recently Read
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 italic">
                          The Algebra of Happiness
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Scott Galloway
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium text-blue-600 dark:text-blue-400">
                          Current Read
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 italic">
                          Thinking, Fast and Slow
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Daniel Kahneman
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium text-black dark:text-white">
                          Planned Read #1
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 italic">
                          The Creative Act: A Way of Being
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Rick Rubin
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium text-black dark:text-white">
                          Planned Read #2
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 italic">
                          The Personal MBA
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                          Josh Kaufman
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
