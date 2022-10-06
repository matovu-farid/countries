import { UPDATE_COUNTRY } from "../queries/mutations";
const useUpdateCountry = (country) => {
  const [mutate, { data, loading, error }] = useMutation(UPDATE_COUNTRY);
  const addCountry = async (country) => {
    return await mutate({ variables: { country } });
  };
  return { addCountry, data, loading, error };
};
export default useUpdateCountry;
