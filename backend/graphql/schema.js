import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Query {
    countries: CountryList!
    country(id: ID!): CountryOutput!
  }
  type Mutation {
    addCountry(country: CountryInput): CountryOutput!
    updateCountry(country: CountryUpdate): CountryOutput!
    deleteCountry(id: ID!): CountryOutput!
  }
  type CountryList {
    data: [Country]!
    count: Int!
    messege: String
  }
  type Country {
    id: ID!
    index: Int!
    area: Int!
    country: String!
    totalPopulation: Int!
    year: Int!
  }
  type CountryOutput {
    country: Country
    messege: String
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
