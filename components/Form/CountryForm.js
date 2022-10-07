import React from "react";
import useCountries from "../../hooks/useCountries";
import PrimaryButton from "../Buttons/PrimaryButton";
import FormItem from "./FormText";
import { useState } from "react";

const CountryForm = ({ innitialData, submitFunction }) => {
  const { count: index } = useCountries();
  const [area, setArea] = useState(innitialData?.area || 0);
  const [country, setCountry] = useState(innitialData?.country || "");
  const [totalPopulation, setTotalPopulation] = useState(
    innitialData?.population || 0
  );
  const [year, setYear] = useState(innitialData?.year || "");

  const handleSubmit = () => {
    const newCountry = {
      area,
      country,
      totalPopulation,
      year,
      index,
      id: innitialData?.id,
    };
    submitFunction(newCountry);
  };

  return (
    <form class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <FormItem
          id="country"
          label="Country"
          value={country}
          placeholder="Country..."
          onChangeHandler={(value) => setCountry(value)}
        ></FormItem>
        <FormItem
          id="area"
          type="number"
          value={area}
          label="Area (square kilometres)"
          placeholder="Area..."
          onChangeHandler={(value) => setArea(value)}
        ></FormItem>
        <FormItem
          id="totalPopulation"
          type="number"
          value={totalPopulation}
          step={10000}
          label="Total population"
          placeholder="Total population..."
          onChangeHandler={(value) => setTotalPopulation(value)}
        ></FormItem>

        <FormItem
          id="year"
          value={year}
          label="Year"
          placeholder="Year..."
          onChangeHandler={(value) => setYear(value)}
        ></FormItem>
        <PrimaryButton clickHandler={handleSubmit} label="Submit" />
      </div>
    </form>
  );
};

export default CountryForm;
