import { GET_COUNTRY } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";
const useCountries = (id) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, { variables: { id } });
  const country = data?.country || {};
  return { loading, error, country };
};
export default useCountries;
