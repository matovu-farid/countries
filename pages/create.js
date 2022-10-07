import React from "react";
import CountryForm from "../components/Form/CountryForm";
import useAddCountry from "../hooks/useAddCountry";

const Create = () => {
  const { addCountry } = useAddCountry();

  return (
    <div>
      <h1 className="text-center text-2xl">Create</h1>
      <CountryForm submitFunction={addCountry} />
    </div>
  );
};

export default Create;
