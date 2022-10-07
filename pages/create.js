import React from "react";
import CountryForm from "../components/Form/CountryForm";
import useAddCountry from "../hooks/useAddCountry";

const Create = () => {
  return (
    <div>
      <h2 className="text-center text-2xl">Create</h2>
      <CountryForm submitFunction={useAddCountry} />
    </div>
  );
};

export default Create;
