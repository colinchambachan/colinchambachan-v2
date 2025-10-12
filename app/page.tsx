"use client";
import Image from "next/image";
import hero from "/public/hero.jpg";
import { useState, useEffect } from "react";
import Modal from "./_components/modal";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  type Paragraph = string[];
  const [quickContent, setQuickContent] = useState<string[][]>([]);
  const [firstTwoLines, setFirstTwoLines] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showNotation, setShowNotation] = useState<boolean>(false);

  useEffect(() => {
    // Delay RoughNotation until after Framer Motion animations complete AND layout is stable
    const timer = setTimeout(() => {
      // Force a reflow to ensure layout is settled
      window.requestAnimationFrame(() => {
        setShowNotation(true);
      });
    }, 800); // Increased delay for more stability

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // fetch the text file
    const fetchTextFile = async () => {
      try {
        const response = await fetch("/data/quick.txt");
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const text = await response.text();
        const lines = text.split("\n");
        setFirstTwoLines(lines.slice(0, 2));

        const linesToRender = lines.slice(2);

        const paragraphs: Paragraph[] = linesToRender.reduce<Paragraph[]>(
          (acc, line) => {
            if (line.trim() === "") {
              acc.push([]);
            } else {
              if (acc.length === 0) acc.push([]);
              acc[acc.length - 1].push(line);
            }
            return acc;
          },
          []
        );

        setQuickContent(paragraphs);
      } catch (error) {
        console.error("Error fetching the file:", error);
      }
    };

    fetchTextFile();
  }, []);

  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-8">
      <div className="hero max-w-5xl mx-auto relative">
        {/* Background gradient effect */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 rounded-2xl md:rounded-3xl opacity-60" />

        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between py-6 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-400 opacity-75 blur-md"></div>
            <Image
              src={hero}
              className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 xl:w-80 xl:h-80 rounded-full shadow-2xl mb-6 md:mb-0 object-cover relative z-10"
              alt="Profile photo of Colin"
              width={400}
              height={400}
              priority={true}
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left md:ml-12 md:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                {showNotation ? (
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#2563eb"
                    strokeWidth={2}
                    animationDuration={800}
                  >
                    Hi! I'm Colin
                  </RoughNotation>
                ) : (
                  <span>Hi! I'm Colin</span>
                )}
              </h1>
            </motion.div>
            <h2 className="mt-4 mb-1 text-base md:text-lg text-gray-600 font-normal">
              Currently researching LLMs @ University of Oxford
            </h2>
            <h2 className="mb-6 text-base md:text-lg text-gray-500 font-normal">
              Prev. Data + AI @ RBC Borealis
            </h2>
            <p className="mb-6 text-lg md:text-xl text-primary font-semibold">
              Passionate about Cloud, Data, and AI
            </p>

            <motion.button
              className="rounded-lg bg-primary text-white px-8 py-3 font-semibold text-base w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => {
                setShowModal(true);
              }}
              whileHover={{ scale: 1.02, backgroundColor: "#0052cc" }}
              whileTap={{ scale: 0.98 }}
            >
              View Cheatsheet
            </motion.button>

            <div className="flex md:hidden justify-center gap-4 mt-8">
              <motion.a
                href={"https://www.linkedin.com/in/colinchambachan/"}
                target="_blank"
                aria-label="LinkedIn Profile"
                className="text-gray-700"
                whileHover={{ y: -3, color: "#0A66C2" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </motion.a>
              <motion.a
                href={"https://github.com/colinchambachan"}
                target="_blank"
                aria-label="GitHub Profile"
                className="text-gray-700"
                whileHover={{ y: -3, color: "#24292F" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </motion.a>
              <motion.a
                href={"mailto:cchambachan@outlook.com"}
                target="_blank"
                aria-label="Email"
                className="text-gray-700"
                whileHover={{ y: -3, color: "#EA4335" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        firstTwoLines={firstTwoLines}
        quickContent={quickContent}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
