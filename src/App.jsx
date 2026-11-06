import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Searchbar from "./component/Searchbar";
import Filter from "./component/Filter";
import CountryCard from "./component/Country";
import data from "./data.json";
import CountryDetail from "./pages/CountryDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const box = darkMode ? "bg-blue-900 text-white" : "bg-white text-grey-950";
  const [selectedRegion, setSelectedRegion] = useState("");



  const filterData = data.filter((country) =>
    country.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  const filterRegion = data.filter(
    (country) =>
      country.region.toLocaleLowerCase() === selectedRegion.toLocaleLowerCase(),
  );

  return (
    <div
      className={`${darkMode ? "bg-(--color-blue-950)" : "bg-[#FAFAFA]"} min-h-screen pb-20 `}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      <div className="">
        <div className=" flex flex-col gap-8 p-5 md:flex-row justify-between md:px-16">
          <Searchbar query={query} setQuery={setQuery} darkMode={darkMode} />
          <Filter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            box={box}
            darkMode={darkMode}
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <CountryCard
                  filterRegion={filterRegion}
                  query={query}
                  filterData={filterData}
                  box={box}
                  selectedRegion={selectedRegion}
                  darkMode={darkMode}
                />
              }
            />
            <Route path="/country/:name" element={<CountryDetail darkMode={darkMode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
