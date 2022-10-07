import { useMutation } from "@apollo/react-hooks";
import { ADD_COUNTRY } from "../queries/mutations";
import { toast } from "react-toastify";
const useAddCountry = () => {
  const [mutate, { data, loading, error }] = useMutation(ADD_COUNTRY);
  const addCountry = async (country) => {
    return await toast.promise(mutate({ variables: { country } }), {
      pending: "Adding country...",
      success: "Country added! 👌",
      error: "Error adding country 🤯",
    });
  };
  return { addCountry, data, loading, error };
};
export default useAddCountry;
