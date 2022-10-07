import useDeleteCountry from "../hooks/useDeleteCountry";
import DangerButton from "./Buttons/DangerButton";
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";

const CountrySummary = ({ country }) => {
  const { deleteCountry } = useDeleteCountry();
  const handleDelete = () => {
    deleteCountry(country.id);
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
        <div className=" justify-between gap-2  grid grid-cols-2 md:grid-cols-3 ">
          <DangerButton label="Delete" clickHandler={() => handleDelete()} />
          <SecondaryButton label="Details" href={`/details/${country.id}`} />
          <PrimaryButton label="Edit" href={`/edit/${country.id}`} />
        </div>
      </div>
    </div>
  );
};
export default CountrySummary;
