import React from "react";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed top-[10.5rem] left-0 w-full bg-[#ffffffcc] dark:bg-[#1b1b1bcc]  h-full z-10">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow">
        <button
          type="button"
          onClick={onClose}
          className=" fixed top-0 right-5 text-[30px] hover:text-red-500"
        >
          x
        </button>
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
