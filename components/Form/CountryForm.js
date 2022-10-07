import React, { useEffect } from "react";
import useCountries from "../../hooks/useCountries";
import PrimaryButton from "../Buttons/PrimaryButton";
import FormItem from "./FormText";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CountryForm = ({ innitialData, submitFunction }) => {
  const { count: index } = useCountries();
  const [area, setArea] = useState(0);
  const [country, setCountry] = useState("");
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [year, setYear] = useState(2022);
  const { addCountry } = submitFunction();
  const router = useRouter();
  const innitialDataExists = innitialData !== undefined;
  useEffect(() => {
    if (innitialDataExists) {
      console.log("Innitial data exists");
      console.log(innitialData);
      const { area } = innitialData;
      setArea(area);
      setCountry(innitialData.country);
      setTotalPopulation(innitialData.totalPopulation);
      setYear(innitialData.year);
    }
  }, [innitialDataExists]);

  const handleSubmit = () => {
    if (!country || !area || !totalPopulation || !year) {
      console.log("Missing data", { area, country, totalPopulation, year });
      toast.info("Please fill all the fields");
      return;
    }
    let updateFields = {
      area,
      country,
      totalPopulation,
      year,
      index,
    };
    if (innitialDataExists) {
      updateFields = {
        area,
        country,
        totalPopulation,
        year,

        id: innitialData.id,
      };
    }
    addCountry(updateFields).then(() => {
      router.push(`/`);
    });
  };

  return (
    <form className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <FormItem
          id="country"
          label="Country"
          value={country}
          placeholder="Country..."
          onChangeHandler={(value) => {
            console.log(value);
            setCountry(value);
          }}
        ></FormItem>
        <FormItem
          id="area"
          type="number"
          value={area}
          label="Area (square kilometres)"
          placeholder="Area..."
          onChangeHandler={(value) => setArea(parseInt(value))}
        ></FormItem>
        <FormItem
          id="totalPopulation"
          type="number"
          value={totalPopulation}
          step={10000}
          label="Total population"
          placeholder="Total population..."
          onChangeHandler={(value) => setTotalPopulation(parseInt(value))}
        ></FormItem>

        <FormItem
          id="year"
          value={year}
          type="number"
          step={1}
          label="Year"
          placeholder="Year..."
          onChangeHandler={(value) => setYear(parseInt(value))}
        ></FormItem>
        <PrimaryButton clickHandler={handleSubmit} label="Submit" />
      </div>
    </form>
  );
};

export default CountryForm;
