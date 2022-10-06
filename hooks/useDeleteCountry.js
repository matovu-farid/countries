import { DELETE_COUNTRY } from "../queries/mutations";
const useUpdateCountry = (id) => {
  const [mutate, { data, loading, error }] = useMutation(DELETE_COUNTRY);
  const deleteCountry = async (id) => {
    return await mutate({ variables: { id } });
  };
  return { deleteCountry, data, loading, error };
};
export default useUpdateCountry;
