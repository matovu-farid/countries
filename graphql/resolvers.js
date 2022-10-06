export const resolvers = () => {
  Query: {
    countries: () => {
      return [
        {
          id: "0",
          area: "area",
          country: "country",
          totalPopulation: 1000,
          year: "2000",
        },
      ];
    };
  }
};
