import { GET_COUNTRIES } from "../queries/queries";
const useCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries = data?.countries?.data || [];
  const count = data?.countries?.count || 0;
  return { loading, error, countries, count };
};
export default useCountries;
