import React from "react";
import useCountries from "../../hooks/useCountries";
import PrimaryButton from "../Buttons/PrimaryButton";
import FormItem from "./FormText";

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
          label={country}
          placeholder="Country..."
          onChangeHandler={(value) => setCountry(value)}
        ></FormItem>
        <FormItem
          id="area"
          type="number"
          label={area}
          placeholder="Area..."
          onChangeHandler={(value) => setArea(value)}
        ></FormItem>
        <FormItem
          id="totalPopulation"
          type="number"
          label={totalPopulation}
          placeholder="Total Population..."
          onChangeHandler={(value) => setTotalPopulation(value)}
        ></FormItem>

        <FormItem
          id="year"
          label={year}
          placeholder="Year..."
          onChangeHandler={(value) => setYear(value)}
        ></FormItem>
        <PrimaryButton clickHandler={handleSubmit} label={Submit} />
      </div>
    </form>
  );
};

export default CountryForm;
