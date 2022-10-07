import { DELETE_COUNTRY } from "../queries/mutations";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import { GET_COUNTRIES } from "../queries/queries";
const useDeleteCountry = () => {
  const [mutate, { data, loading, error }] = useMutation(DELETE_COUNTRY);
  const deleteCountry = async (deleteCountryId) => {
    return await toast.promise(
      mutate({
        variables: { deleteCountryId },
        refetchQueries: [GET_COUNTRIES],
      }),
      {
        pending: "Deleting country...",
        success: "Country deleted! 👌",
        error: "Error deleting country 🤯",
      }
    );
  };
  return { deleteCountry, data, loading, error };
};
export default useDeleteCountry;
