import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = { name: string; label: string; register: any };

const InputCountry = ({ name, label, register }: Props) => {
  const [countries, setCountries] = useState<ICountries[] | null>(null);

  const getCountry = async () => {
    const data = await axios.get(" https://restcountries.com/v3.1/all");
    setCountries(data.data);
  };

  useEffect(() => {
    getCountry();
  }, [0]);

  return (
    <div className="flex flex-col">
      {label && (
        <label
          className=" text-dark/70  mb-1.5 font-medium capitalize text-sm"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className=" relative ">
        <select
          {...register(name)}
          className={clsx(
            "px-2 py-3.5 w-fit",
            "border border-dark/20 rounded-md text-dark   w-full bg-white appearance-none "
          )}
        >
          {countries?.map((country, idx) => {
            return (
              <option
                defaultValue={"United States"}
                value={country.name?.common}
                key={idx}
              >
                {country.name?.common}
              </option>
            );
          })}
        </select>

        <FaChevronDown className=" absolute top-1/2 right-4 -mt-1.5" />
      </div>
    </div>
  );
};

export default InputCountry;
