import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Query {
    countries: CountryList
    country(id: ID!): Country
  }
  type Mutation {
    addCountry(country: CountryInput): Country!
    updateCountry(country: CountryUpdate): Country!
    deleteCountry(id: ID!): Country!
  }
  type CountryList {
    data: [Country]!
    count: Int!
  }
  type Country {
    id: ID!
    index: Int!
    area: Int!
    country: String!
    totalPopulation: Int!
    year: Int!
  }
  input CountryInput {
    area: Int!
    country: String!
    totalPopulation: Int!
    year: Int!
    index: Int!
  }
  input CountryUpdate {
    id: ID!
    area: Int
    country: String
    totalPopulation: Int
    year: Int
  }
`;
export default typeDefs;
