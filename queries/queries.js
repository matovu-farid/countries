export const GET_COUNTRIES = gql`
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
export const GET_COUNTRY = gql`
  query Country($countryId: ID!) {
    country(id: $countryId) {
      id
      index
      area
      country
      totalPopulation
      year
    }
  }
`;
