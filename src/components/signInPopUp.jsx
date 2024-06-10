import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

function SignInPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Sign up/ Sign in</button>
      <Modal isOpen={isOpen} onClose={togglePopup}>
        {/* Modal content goes here */}
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className=" rounded-lg shadow-md p-8">
            <h1 className="text-center text-2xl text-white font-bold mb-4">
              KAIZEN CART
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Sign in with your Kaizen account
            </p>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label for="email" className="text-gray-400 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md border border-gray-600 bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label for="password" className="text-gray-400 mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="rounded-md border border-gray-600 bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="text-center">
                <a href="#" className="text-blue-500 hover:underline">
                  Don't have an account? Create one
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignInPopUp;
