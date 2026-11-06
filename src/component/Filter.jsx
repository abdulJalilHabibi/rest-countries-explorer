import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import data from "../data.json";
export default function Filter({ darkMode, box,selectedRegion,setSelectedRegion }) {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="relative w-52 text-sm">
      <button
        onClick={() => setOpen(!open)}
        className={`flex cursor-pointer w-full items-center justify-between rounded-md  px-6 py-4 shadow-md ${box}`}
      >
        <span>{selectedRegion || " Filter by Region"}</span>
        <ChevronDown className="size-4" />
      </button>

      {open && (
        <ul className={`absolute mt-2 w-full rounded-md py-4 shadow-md ${box}`}>
          <li
            onClick={() => (setSelectedRegion("Africa"), setOpen(false))}
            className="px-6 cursor-pointer py-1"
          >
            Africa
          </li>
          <li
            onClick={() => (setSelectedRegion("Americas"), setOpen(false))}
            className="px-6 cursor-pointer py-1"
          >
            America
          </li>
          <li
            onClick={() => (setSelectedRegion("Asia"), setOpen(false))}
            className=" px-6 cursor-pointer py-1"
          >
            Asia
          </li>
          <li
            onClick={() => (setSelectedRegion("Europe"), setOpen(false))}
            className=" px-6 cursor-pointer py-1"
          >
            Europe
          </li>
          <li
            onClick={() => (setSelectedRegion("Oceania"), setOpen(false))}
            className=" px-6 cursor-pointer py-1"
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}
