import { DELETE_COUNTRY } from "../queries/mutations";
import { useMutation } from "@apollo/react-hooks";
const useDeleteCountry = (id) => {
  const [mutate, { data, loading, error }] = useMutation(DELETE_COUNTRY);
  const deleteCountry = async () => {
    return await mutate({ variables: { id } });
  };
  return { deleteCountry, data, loading, error };
};
export default useDeleteCountry;
