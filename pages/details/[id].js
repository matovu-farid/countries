import React from "react";
import CountryDetails from "../../components/CountryDetails";
import useUpdateCountry from "../../hooks/useUpdateCountry";
import useCountry from "../../hooks/useCountry";
import { useRouter } from "next/router";
const CoutryDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  if (!id) return <div>Loading...</div>;

  return <CountryDetailsInternal id={id} />;
};

const CountryDetailsInternal = ({ id }) => {
  const { country } = useCountry(id);

  if (Object.keys(country).length === 0 || country === undefined)
    return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-center text-2xl">Details</h2>

      <CountryDetails country={country} />
    </div>
  );
};

export default CoutryDetails;
