import useDeleteCountry from "../hooks/useDeleteCountry";
import DangerButton from "./Buttons/DangerButton";
import PrimaryButton from "./Buttons/PrimaryButton";

const CountryItem = ({ country }) => {
  const { deleteCountry } = useDeleteCountry(country.id);
  const handleDelete = () => {
    deleteCountry();
  };
  return (
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          {country.country}
        </h3>
        <h4>
          {country.area} km<sup>2</sup>
        </h4>
        <h5>{country.totalPopulation} people</h5>
        <h5 class="text-gray-700 text-base mb-4">{country.year}</h5>
        <div class="flex justify-between">
          <DangerButton
            label="Delete Country"
            clickHandler={() => deleteCountry()}
          />
          <PrimaryButton label="Edit Country" href={`/edit/${country.id}`} />
        </div>
      </div>
    </div>
  );
};
export default CountryItem;
