import { gql } from "@apollo/client";
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
      messege
    }
  }
`;
export const GET_COUNTRY = gql`
  query getCountry($countryId: ID!) {
    country(id: $countryId) {
      country {
        id
        index
        area
        country
        totalPopulation
        year
      }
      messege
    }
  }
`;
