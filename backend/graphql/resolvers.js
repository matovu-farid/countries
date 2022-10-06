import { getCountries, addCountry } from "../data/firebase_function.js";
const resolvers = {
  Query: {
    countries: async () => {
      const countries = await getCountries();
      const count = countries.length;
      return { data: countries, count };
    },
  },
  Mutation: {
    addCountry: async (_, { country }) => {
      return await addCountry(country);
    },
  },
};
export default resolvers;
