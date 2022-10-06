import useCountries from "../hooks/useCountries";
import CountryItem from "./country";

const CountryList = () => {
  const { countries, loading } = useCountries();
  if (loading) return <div>Loading...</div>;
  return (
    <div class="flex justify-center">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        {countries.map((country) => (
          <CountryItem key={country.id} country={country}></CountryItem>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
