import React from "react";
import CountryForm from "../../components/Form/CountryForm";
import useUpdateCountry from "../../hooks/useUpdateCountry";
import useCountry from "../../hooks/useCountry";
import { useRouter } from "next/router";
const EditCountry = () => {
  const router = useRouter();
  const id = router.query.id;

  if (!id) return <div>Loading...</div>;

  return <EditCountryInternal id={id} />;
};

const EditCountryInternal = ({ id }) => {
  const { country } = useCountry(id);

  if (Object.keys(country).length === 0 || country === undefined)
    return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-center text-2xl">Edit Country</h2>

      <CountryForm submitFunction={useUpdateCountry} innitialData={country} />
    </div>
  );
};

export default EditCountry;
