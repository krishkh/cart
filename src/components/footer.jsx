import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col mt-20">
      <footer className="bg-gray-200 bottom-0 w-full text-gray-100 py-4 px-4 border-[2px] border-solid border-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <p className="text-xs text-center">&copy; 2024 Your Company Name</p>
          <nav className="flex space-x-4">
            <Link to="#" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
