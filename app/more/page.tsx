"use client";

import { RoughNotation } from "react-rough-notation";
import { useState, useEffect } from "react";

export default function More() {
  const [showGDGNotation, setShowGDGNotation] = useState(false);
  const [showGuitarNotation, setShowGuitarNotation] = useState(false);
  const [showReadingNotation, setShowReadingNotation] = useState(false);

  useEffect(() => {
    // Cascade the underlines
    setTimeout(() => setShowGDGNotation(true), 800);
    setTimeout(() => setShowGuitarNotation(true), 1600);
    setTimeout(() => setShowReadingNotation(true), 2400);
  }, []);
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="w-full text-sm md:text-base">
        <div className="flex flex-col">
          <div>
            <h1
              className="text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-duration="600"
              id="parent"
            >
              <RoughNotation
                type="underline"
                show={showGDGNotation}
                color="#2563eb"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="text-primary">
                  &gt; Google Developer Groups
                </span>
              </RoughNotation>
            </h1>
            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-anchor="#parent"
            >
              <p>
                One of my main involvements outside of school and work is as{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={200}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">
                    President @ GDG McMaster.
                  </span>
                </RoughNotation>{" "}
                In collaboration with Google, GDGs provide learning
                opportunities for aspiring developers, allowing them to gain
                hands-on experience, develop essential skills, and build a
                strong foundation for a tech career.
              </p>
              <p>
                I lead a team of 70+ as one of the largest chapters in North
                America, boasting 1300+ members. We've been very fortunate to
                host successful events such resume roasts, networking and
                leadership panels, intro to various tech nights, and even an
                annual hackathon with{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={400}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">200+</span>
                </RoughNotation>{" "}
                attendees. You can find out more about us{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4 inline-flex items-center gap-1"
                  href="https://gdg.community.dev/gdg-on-campus-mcmaster-university-hamilton-canada/"
                  target="_blank"
                >
                  here
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
              </p>
              <p>
                As a result of this experience, I first got to attend{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={600}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">
                    Google Cloud Next '23
                  </span>
                </RoughNotation>{" "}
                in{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={700}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">
                    San Francisco, California
                  </span>
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={800}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">Google IO '25</span>
                </RoughNotation>{" "}
                in{" "}
                <RoughNotation
                  type="highlight"
                  show={showGDGNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={900}
                  multiline={true}
                  padding={2}
                >
                  <span className="text-primary font-bold">
                    Mountain View, California
                  </span>
                </RoughNotation>
                . It was extremely interesting to see the newest innovations in
                Data Services with Gen AI, and how companies are able to deliver
                them at scale by leveraging the cloud. We got the change to
                connect with Google Engineers, and I was quite interested in the
                working being done on the Gemini team. Naturally, this played a
                big part in kick-starting my passion for Cloud, Data, and AI.
                You can read more about Google Cloud Next '23{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4 inline-flex items-center gap-1"
                  href="https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next-23"
                  target="_blank"
                >
                  here
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
              </p>
            </div>
            <h1
              className="text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-anchor="#parent"
            >
              <RoughNotation
                type="underline"
                show={showGuitarNotation}
                color="#2563eb"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="text-primary">&gt; Guitar & Music</span>
              </RoughNotation>
            </h1>

            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-anchor="#parent"
            >
              <p>
                Music has been a hobby of mine for quite a while, as I started
                to learn the piano as a child, before later learning the guitar.
                Starting as a Covid project, some of my friends and I have been
                putting together covers of songs, which can be found{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4 inline-flex items-center gap-1"
                  href="https://www.instagram.com/monkey.hut/"
                  target="_blank"
                >
                  here
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
              </p>
            </div>
            <h1
              className="text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-anchor="#parent"
            >
              <RoughNotation
                type="underline"
                show={showReadingNotation}
                color="#2563eb"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="text-primary">&gt; Reading</span>
              </RoughNotation>
            </h1>

            <div
              className="mb-8 md:mb-12 space-y-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-anchor="#parent"
            >
              <p>
                Reading is another interest of mine I try to keep up with. My
                favourite book is{" "}
                <RoughNotation
                  type="highlight"
                  show={showReadingNotation}
                  color="#dbeafe"
                  animationDuration={600}
                  animationDelay={200}
                  multiline={true}
                  padding={2}
                >
                  <span className="italic font-bold text-primary">
                    Ego is the Enemy
                  </span>
                </RoughNotation>{" "}
                by <span className="font-medium">Ryan Holiday</span>. Especially
                in this industry, where we're continually learning and adapting,
                I think it's all the more important to have an open mindset.
                Whether an experienced developer or a new intern, I believe
                humility is extremely important to long-term growth and is
                something I try to implement into my engineering & leadership
                practices.
              </p>

              {/* Reading Progress Table */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                  Current Reading List
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border-2 border-gray-200 text-sm md:text-base bg-white shadow-md">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-2 border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                          Status
                        </th>
                        <th className="border-2 border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                          Book Title
                        </th>
                        <th className="border-2 border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                          Author
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="border-2 border-gray-200 px-4 py-3 font-medium text-gray-700">
                          Recently Read
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3 italic">
                          The Algebra of Happiness
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3">
                          Scott Galloway
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors bg-blue-50/30">
                        <td className="border-2 border-gray-200 px-4 py-3 font-semibold text-primary">
                          Current Read
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3 italic font-medium">
                          Thinking, Fast and Slow
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3 font-medium">
                          Daniel Kahneman
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="border-2 border-gray-200 px-4 py-3 font-medium text-gray-700">
                          Planned Read #1
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3 italic">
                          The Creative Act: A Way of Being
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3">
                          Rick Rubin
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="border-2 border-gray-200 px-4 py-3 font-medium text-gray-700">
                          Planned Read #2
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3 italic">
                          The Personal MBA
                        </td>
                        <td className="border-2 border-gray-200 px-4 py-3">
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
