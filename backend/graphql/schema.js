import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Query {
    countries: [Country]
    addCountry(country: CountryInput): Country
  }
  type Country {
    id: ID
    area: String
    country: String
    totalPopulation: Int
    year: String
  }
  input CountryInput {
    area: String
    country: String
    totalPopulation: Int
    year: String
  }
`;
export default typeDefs;
