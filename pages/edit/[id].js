import React from "react";
import CountryForm from "../../components/Form/CountryForm";
import useUpdateCountry from "../../hooks/useUpdateCountry";
import useCountry from "../../hooks/useCountry";
import { useRouter } from "next/router";
const EditCountry = () => {
  // TODO: Get the country id from the url
  const router = useRouter();
  const id = router.query.id;
  // TODO: Get the country data from the database
  const { country } = useCountry();
  const { updateCountry } = useUpdateCountry(country);

  return (
    <div>
      <h1>Edit Country</h1>
      <CountryForm submitFunction={updateCountry} innitialData={country} />
    </div>
  );
};

export default EditCountry;
