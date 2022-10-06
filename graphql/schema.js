import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Query {
    countries: [Country]!
  }
  type Country {
    id: ID
    area: String
    country: String
    totalPopulation: String
    year: String
  }
`;
