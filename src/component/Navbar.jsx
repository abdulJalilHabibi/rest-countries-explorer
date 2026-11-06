import { MoonIcon } from "lucide-react";
import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div
      className={`${darkMode ? "bg-(--color-blue-900) text-(--color-white)" : "bg-white text-black"} flex justify-between items-center md:p-4 md:px-16  p-6 mb-2 shadow-md `}
    >
      <div>
        <h1 className="font-bold ">Where in the world</h1>
      </div>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <button className="cursor-pointer">
          <MoonIcon />
        </button>
        <span className="font-bold">Dark Mode</span>
      </div>
    </div>
  );
}
