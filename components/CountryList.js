import useCountries from "../hooks/useCountries";
import CountryInfo from "./CountryDetails";
import CountrySummary from "./CountrySummary";

const CountryList = () => {
  const { countries, loading } = useCountries();
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center">
      <ul className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 bg-white rounded-lg border border-gray-200  text-gray-900">
        {countries.map((country) => (
          <CountrySummary key={country.id} country={country}></CountrySummary>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
