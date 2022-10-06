import { UPDATE_COUNTRY } from "../queries/mutations";
const useCountries = (country) => {
  const { loading, error, data } = useQuery(UPDATE_COUNTRY, {
    variables: { country },
  });
  const countries = data?.country || {};
  return { loading, error, countries };
};
export default useCountries;
