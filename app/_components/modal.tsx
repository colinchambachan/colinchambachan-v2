"use client";

import { useState, SetStateAction, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ModalProps {
  firstTwoLines: string[];
  quickContent: string[][];
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  firstTwoLines,
  quickContent,
  showModal,
  setShowModal,
}) => {
  type Paragraph = string[];

  const [isQuickCopied, setQuickCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        handleModalClose();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showModal]);

  const handleModalClose = () => {
    setQuickCopied(false);
    setShowModal(false);
  };

  const handleClipboardCopy = () => {
    let content = "";

    firstTwoLines.forEach((line) => {
      content += line + "\n";
    });

    quickContent.forEach((section) => {
      section.forEach((line) => {
        content += line + "\n";
      });
      content += "\n";
    });

    // copy the formatted content to clipboard
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setQuickCopied(true);
        setTimeout(() => setQuickCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop - clicking this should close the modal */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-black cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClose}
          />

          {/* Modal container - clicking this should also close the modal */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center px-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClose}
          >
            {/* Modal content - clicking this should NOT close the modal */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full sm:max-w-md md:max-w-lg cursor-default max-h-[85vh] sm:max-h-[90vh] md:max-h-[95vh]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-gray-100">
                    ~/Colin.zip
                  </h3>
                  <motion.button
                    onClick={handleModalClose}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"
                    aria-label="Close modal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </motion.button>
                </div>
                <h6 className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 md:mb-4">
                  $ unzip Colin.zip && cat Colin/quick.txt
                </h6>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 sm:p-4 md:p-5 rounded-md border border-gray-200 dark:border-gray-600">
                  <div className="mb-3 flex justify-between items-center">
                    <div className="text-base md:text-lg text-gray-900 dark:text-gray-100">
                      <strong>Colin Chambachan</strong>
                    </div>
                    <motion.div
                      onClick={handleClipboardCopy}
                      className="cursor-pointer bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 transition-colors"
                      whileTap={{ scale: 0.95 }}
                    >
                      {!isQuickCopied ? (
                        <i className="bi bi-clipboard text-gray-500 dark:text-gray-300"></i>
                      ) : (
                        <motion.i
                          className="bi bi-clipboard-check text-green-500 dark:text-green-400"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        ></motion.i>
                      )}
                    </motion.div>
                  </div>
                  <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] custom-scrollbar pr-2">
                    {quickContent.map((paragraph: Paragraph, index: number) => (
                      <motion.div
                        key={index}
                        className="mb-4 last:mb-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {paragraph.map((line: string, lineIndex: number) => (
                          <p
                            key={lineIndex}
                            className={`${
                              lineIndex === 0
                                ? "font-bold underline text-gray-900 dark:text-gray-100"
                                : "text-gray-600 dark:text-gray-300"
                            } leading-relaxed text-sm sm:text-base`}
                            style={{
                              margin: 0,
                            }}
                          >
                            {line}
                          </p>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
