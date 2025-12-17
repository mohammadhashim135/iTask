import React from "react";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-500 text-black shadow-md">
      <h1 className="text-2xl font-bold">
        <span className="font-[Birthstone] text-[44px] text-blue-600">i</span> -Task
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg transition duration-300 bg-gray-800 text-white hover:bg-gray-600 flex items-center"
      >
        {darkMode ? (
          <>
            <i className="fas fa-sun mr-2"></i> Light Mode
          </>
        ) : (
          <>
            <i className="fas fa-moon mr-2"></i> Dark Mode
          </>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
