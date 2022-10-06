const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      data {
        id
        index
        area
        country
        totalPopulation
        year
      }
      count
    }
  }
`;
