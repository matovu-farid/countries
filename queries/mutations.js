import { gql } from "apollo-server-express";
export const ADD_COUNTRY = gql`
  mutation AddCountry($country: CountryInput) {
    addCountry(country: $country) {
      country
      area
      id
      year
      totalPopulation
    }
  }
`;
