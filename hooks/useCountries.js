import { GET_COUNTRIES } from "../queries/queries";
const useCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries = data?.countries?.data || [];
  return { loading, error, countries };
};
export default useCountries;
