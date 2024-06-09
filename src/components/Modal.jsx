import React from "react";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed top-[10.5rem] left-0 opacity-70 w-full bg-white dark:bg-gray-200  h-full z-10">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black rounded shadow  p-4">
        <button
          type="button"
          onClick={onClose}
          className="mt-4 fixed top-0 right-0 text-red-500 hover:underline"
        >
          x
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
