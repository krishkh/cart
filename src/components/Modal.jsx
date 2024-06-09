import React from "react";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed top-[10.5rem] left-0 w-full bg-[#ffffff55] dark:bg-gray-200  h-full z-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black rounded shadow">
        <button
          type="button"
          onClick={onClose}
          className="mt-4 fixed top-0 right- text-[40px] text-red-500"
        >
          x
        </button>
        <div className="p-12">{children}</div>
      </div>
      //
    </div>
  );
}

export default Modal;
