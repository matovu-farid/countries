import {
  getCountries,
  addCountry as add,
  updateCountry as update,
  deleteCountry as removeCountry,
} from "../data/firebase_function.js";
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
      return await add(country);
    },
    updateCountry: async (_, { country }) => {
      return await update(country);
    },
    deleteCountry: async (_, { id }) => {
      return await removeCountry(id);
    },
  },
};
export default resolvers;
