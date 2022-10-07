import useDeleteCountry from "../hooks/useDeleteCountry";
import DangerButton from "./Buttons/DangerButton";
import PrimaryButton from "./Buttons/PrimaryButton";

const CountryItem = ({ country }) => {
  const { deleteCountry } = useDeleteCountry(country.id);
  const handleDelete = () => {
    deleteCountry();
  };
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h3 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {country.country}
        </h3>
        <h4>
          {country.area} km<sup>2</sup>
        </h4>
        <h5>{country.totalPopulation} people</h5>
        <h5 className="text-gray-700 text-base mb-4">{country.year}</h5>
        <div className="flex justify-between gap-2">
          <DangerButton label="Delete" clickHandler={() => deleteCountry()} />
          <PrimaryButton label="Edit" href={`/edit/${country.id}`} />
        </div>
      </div>
    </div>
  );
};
export default CountryItem;
