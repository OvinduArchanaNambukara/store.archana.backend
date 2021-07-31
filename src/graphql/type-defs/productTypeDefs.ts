import {gql} from "apollo-server-express"

export const productTypeDefs = gql`
    type Query{
      getFoodProducts: [Product!]!
    }
    
    type Product {
      _id: String!
      name: String!
      image: String!
      current_price: Int!
      old_price: Int 
    }
`;
