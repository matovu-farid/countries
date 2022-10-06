import { getCountries, addCountry } from "../data/firebase_function.js";
const resolvers = {
  Query: {
    countries: async () => {
      const countries = await getCountries();
      console.log(countries);
      return countries;
    },
    addCountry: async (_, { country }) => {
      return await addCountry(country);
    },
  },
};
export default resolvers;
