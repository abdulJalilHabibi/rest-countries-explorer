import { ArrowLeft } from "lucide-react";
import data from "../data.json";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CountryDetail({ darkMode }) {
  const { name } = useParams();
  const navigate = useNavigate();

  const label = darkMode ? "text-[#EEF4F9]" : "text-grey-950";
  const value = darkMode ? "text-[#828C93]" : "text-grey-950";
  const box = darkMode ? "bg-blue-900 text-white" : "bg-white text-grey-950";

  const country = data.find(
    (country) => country.name.toLowerCase() === name.toLowerCase(),
  );

  return (
    <div className="px-6 py-10 md:px-16 ">
      <button
        type="button"
        className={`flex items-center cursor-pointer gap-3 rounded-md px-8 py-2 text-base font-light shadow-md ${box}`}
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="size-5" />
        Back
      </button>

      <div className="mt-16  flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-32">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
          className="w-full max-w-xl lg:w-1/2"
        />

        <div className="lg:w-1/2  ">
          <h2
            className={`mb-6 text-3xl ${darkMode ? "text-white" : "text-black"}  font-bold ">`}
          >
            {country.name}
          </h2>

          <div className="flex  flex-col gap-10 md:flex-row md:gap-20">
            <div className="flex flex-col gap-3 text-sm">
              <p>
                <span className={`font-semibold ${label}`}>Native Name: </span>
                <span className={`font-light ${value}`}>
                  {country.nativeName}
                </span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Population: </span>
                <span className={`font-light ${value}`}>
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Region: </span>
                <span className={`font-light ${value}`}>{country.region}</span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Sub Region: </span>
                <span className={`font-light ${value}`}>
                  {country.subregion}
                </span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Capital: </span>
                <span className={`font-light ${value}`}>{country.capital}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <p>
                <span className={`font-semibold ${label}`}>
                  Top Level Domain:{" "}
                </span>
                <span className={`font-light ${value}`}>
                  {country.topLevelDomain}
                </span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Currencies: </span>
                <span className={`font-light ${value}`}>
                  {country.currencies.map((c) => c.name).join(", ")}
                </span>
              </p>
              <p>
                <span className={`font-semibold ${label}`}>Languages: </span>
                <span className={`font-light ${value}`}>
                  {country.languages.map((l) => l.name).join(", ")}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4  ">
            <span className={`text-sm font-semibold ${label}`}>
              Border Countries:
            </span>
            <div className="flex flex-wrap gap-3">
              {country.borders?.map((border, index) => {
                const borderCountry = data.find(
                  (item) => item.alpha3Code === border,
                );

                return (
                  <Link
                    to={`/country/${borderCountry.name}`}
                    key={index}
                    className={`rounded-md px-6 py-1 text-xs font-light shadow-md ${box}`}
                  >
                    {border}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
