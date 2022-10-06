import { UPDATE_COUNTRY } from "../queries/mutations";
import { useMutation } from "@apollo/react-hooks";
const useUpdateCountry = (country) => {
  const [mutate, { data, loading, error }] = useMutation(UPDATE_COUNTRY);
  const addCountry = async (country) => {
    return await mutate({ variables: { country } });
  };
  return { addCountry, data, loading, error };
};
export default useUpdateCountry;
