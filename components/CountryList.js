import useCountries from "../hooks/useCountries";
import CountryItem from "./Country";

const CountryList = () => {
  const { countries, loading } = useCountries();
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center">
      <ul className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 bg-white rounded-lg border border-gray-200  text-gray-900">
        {countries.map((country) => (
          <CountryItem key={country.id} country={country}></CountryItem>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
