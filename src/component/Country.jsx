import React from "react";
import data1 from "../data1.json";
import { Link } from "react-router-dom";

export default function Country({
  box,
  filterData,
  query,
  filterRegion,
  selectedRegion,
}) {
  const countriesToShow =
    query || selectedRegion ? (query ? filterData : filterRegion) : data1;

  return (
    <div className="   flex flex-col p-10 gap-10 md:grid md:grid-cols-4 md:p-16 ">
      {countriesToShow.map((item) => (
        <Link key={item.name} to={`/country/${item.name.toLowerCase()}`}>
          <div
         
            className={`overflow-hidden rounded-md shadow-md ${box}`}
          >
            <img
              src={item.flags.svg}
              alt={`Flag of ${item.name}`}
              className="h-40 w-full object-cover"
            />

            <div   className="p-6">
              <h2 className="mb-4 text-lg font-bold">{item.name}</h2>

              <p>Population: {item.population.toLocaleString()}</p>

              <p>Region: {item.region}</p>

              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
