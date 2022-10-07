import {
  getCountries,
  addCountry as add,
  updateCountry as update,
  deleteCountry as removeCountry,
  getCountry,
} from "../data/firebase_function.js";
const resolvers = {
  Query: {
    countries: async () => {
      const countries = await getCountries();
      const count = countries.length;
      return {
        data: countries,
        count,
        messege: "Countries fetched successfully",
      };
    },
    country: async (_, { id }) => {
      const country = await getCountry(id);
      return { country, messege: "Country fetched successfully" };
    },
  },
  Mutation: {
    addCountry: async (_, { country }) => {
      const addedCountry = await add(country);
      return { country: addedCountry, messege: "Country added successfully" };
    },
    updateCountry: async (_, { country }) => {
      const updatedCountry = update(country);
      return {
        country: updatedCountry,
        messege: "Country updated successfully",
      };
    },
    deleteCountry: async (_, { id }) => {
      const country = await removeCountry(id);
      return { country, messege: "Country deleted successfully" };
    },
  },
};
export default resolvers;
