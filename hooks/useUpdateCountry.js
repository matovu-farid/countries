import { UPDATE_COUNTRY } from "../queries/mutations";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
const useUpdateCountry = (country) => {
  const [mutate, { data, loading, error }] = useMutation(UPDATE_COUNTRY);
  const addCountry = async (country) => {
    return await toast.promise(mutate({ variables: { country } }), {
      pending: "Updating country...",
      success: "Country updated! 👌",
      error: "Error updating country 🤯",
    });
  };
  return { addCountry, data, loading, error };
};
export default useUpdateCountry;
