import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import data from "../data.json";
export default function Searchbar({ darkMode, query, setQuery }) {
  return (
    <div
      className={`${darkMode ? "bg-(--color-blue-900) text-(--color-white) " : "bg-white text-black"} flex    p-4 rounded-md gap-8  items-center md:w-180 shadow-md `}
    >
      <SearchIcon
        className={`${darkMode ? "text-white" : "text-[gray]"} `}
      />
      <input
        className={`${darkMode ? "placeholder:text-white" : "placeholder:text-[gray]"} w-full outline-none`}
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
