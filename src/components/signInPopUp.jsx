import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

function SignInPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Open Popup</button>
      <Modal isOpen={isOpen} onClose={togglePopup}>
        {/* Modal content goes here */}
        <div className="text-center">This is the modal content!</div>
        <div className="text-center">This is the modal content!</div>
        <div className="text-center">This is the modal content!</div>
        <div className="text-center">This is the modal content!</div>
      </Modal>
    </>
  );
}

export default SignInPopUp;
