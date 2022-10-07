import { GET_COUNTRY } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";
const useCountry = (id) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryId: id },
  });
  const country = data?.country?.country || {};
  const messege = data?.country?.messege || "";
  return { loading, error, country, messege };
};
export default useCountry;
