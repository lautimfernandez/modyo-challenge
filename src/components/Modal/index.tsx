import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

function Modal({ isOpen, children }: ModalProps) {
  useEffect(() => {
    const body = document?.querySelector("body");
    if (!body) return;
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${
        !isOpen && "hidden"
      }`}
    >
      {isOpen && (
        <div className={`absolute w-full h-full bg-black bg-opacity-50`} />
      )}
      <div
        className={`bg-white p-4 rounded-xl shadow-lg z-50 max-sm:w-full max-sm:h-full max-sm:rounded-none ${
          isOpen ? "animate-appear-from-top" : "animate-disappear-to-bottom"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
