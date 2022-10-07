import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation AddCountry($country: CountryInput) {
    addCountry(country: $country) {
      messege
      country {
        id
        index
        area
        country
        totalPopulation
        year
      }
    }
  }
`;
export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry($country: CountryUpdate) {
    updateCountry(country: $country) {
      messege
      country {
        id
        index
        area
        country
        totalPopulation
        year
      }
    }
  }
`;
export const DELETE_COUNTRY = gql`
  mutation DeleteCountry($deleteCountryId: ID!) {
    deleteCountry(id: $deleteCountryId) {
      messege
      country {
        id
        index
        area
        country
        totalPopulation
        year
      }
    }
  }
`;
