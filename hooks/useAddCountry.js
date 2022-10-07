import { useMutation } from "@apollo/react-hooks";
import { ADD_COUNTRY } from "../queries/mutations";
const useAddCountry = () => {
  const [mutate, { data, loading, error }] = useMutation(ADD_COUNTRY);
  const addCountry = async (country) => {
    return await mutate({ variables: { country } });
  };
  return { addCountry, data, loading, error };
};
export default useAddCountry;
