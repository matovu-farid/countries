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
export const UPDATE_COUNTRY = gql`
  mutation AddCountry($country: CountryInput) {
    updateCountry(country: $country) {
      country
      id
      index
      area
      totalPopulation
      year
    }
  }
`;
export const DELETE_COUNTRY = gql`
  mutation DeleteCountry($deleteCountryId: ID!) {
    deleteCountry(id: $deleteCountryId) {
      id
      index
      area
      country
      totalPopulation
      year
    }
  }
`;
