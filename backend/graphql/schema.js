import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Query {
    countries: CountryList
  }
  type Mutation {
    addCountry(country: CountryInput): Country
  }
  type CountryList {
    data: [Country]!
    count: Int!
  }
  type Country {
    id: ID
    index: Int
    area: Int
    country: String
    totalPopulation: Int
    year: String
  }
  input CountryInput {
    area: Int
    country: String
    totalPopulation: Int
    year: String
  }
`;
export default typeDefs;
