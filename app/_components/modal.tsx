"use client";

import { useState, SetStateAction } from "react";

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

  const handleModalClose = () => {
    setQuickCopied(false);
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

  return (
    <dialog
      id="quick_modal"
      className={`modal ${showModal ? "modal-open" : ""}`}
      onClose={handleModalClose}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">~/Colin.zip</h3>
        {/* <h6 className="text-gray-500">$ unzip Colin.zip</h6> */}
        <h6 className="text-gray-500">
          $ unzip Colin.zip && cat Colin/quick.txt
        </h6>
        {/* <p className="py-4">Press ESC key or click outside to close</p> */}
        <div className="bg-gray-100 p-4 mt-3 rounded-md">
          <div className="mb-3 flex justify-between">
            <div className="text-lg">
              <strong>Colin Chambachan</strong>
            </div>
            <div
              onClick={() => {
                handleClipboardCopy();
                setQuickCopied(true);
              }}
              className="transition-colors duration-600 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md mt-[-0.3rem] px-2 py-1"
            >
              {!isQuickCopied && (
                <i className="bi bi-clipboard text-gray-500"></i>
              )}
              {isQuickCopied && (
                <i className="bi bi-clipboard-check text-gray-500"></i>
              )}
            </div>
          </div>
          <div>
            {quickContent.map((paragraph: Paragraph, index: number) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                {paragraph.map((line: string, lineIndex: number) => (
                  <p
                    key={lineIndex}
                    className={`${
                      lineIndex === 0 ? "font-bold underline" : "text-gray-600"
                    }`}
                    style={{
                      margin: 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setShowModal(false)}>close</button>
      </form>
    </dialog>
  );
};
export default Modal;
