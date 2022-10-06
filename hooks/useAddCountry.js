import { useMutation } from "@apollo/react-hooks";
import { ADD_COUNTRY } from "../queries/mutations";
const useCountries = (country) => {
  // const { data } = useMutation(ADD_COUNTRY, {
  //   variables: { country },
  // });
  // const addCountry = data?.addCountry;
  // return { addCountry };
  const { mutate } = useMutation(ADD_COUNTRY);
  const addCountry = (country) => mutate({ variables: { country } });
};
export default useCountries;
