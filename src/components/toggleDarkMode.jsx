import React, { useState } from "react";

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State variable for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle state on button click
    document.documentElement.classList.toggle("dark"); // Add/remove dark class from HTML
    console.log(document.documentElement.classList);
  };

  return (
    <button
      className="w-40 text-10 h-10 bg-blue-500 text-white rounded-md"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ToggleDarkMode;
