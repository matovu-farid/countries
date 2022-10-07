import { DELETE_COUNTRY } from "../queries/mutations";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
const useDeleteCountry = (id) => {
  const [mutate, { data, loading, error }] = useMutation(DELETE_COUNTRY);
  const deleteCountry = async () => {
    return await toast.promise(mutate({ variables: { id } }), {
      pending: "Deleting country...",
      success: "Country deleted! 👌",
      error: "Error deleting country 🤯",
    });
  };
  return { deleteCountry, data, loading, error };
};
export default useDeleteCountry;
