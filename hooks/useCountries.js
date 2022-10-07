import { GET_COUNTRIES } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const useCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "cache-and-network",
  });
  const countries = data?.countries?.data || [];
  const count = data?.countries?.count || 0;
  return { loading, error, countries, count };
};
export default useCountries;
