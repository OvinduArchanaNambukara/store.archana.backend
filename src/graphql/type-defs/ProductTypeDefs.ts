import {gql} from "apollo-server-express"

export const productTypeDefs = gql`
    type Query{
      getFoodProducts: Category!
      getMeatProducts: Category!
      getFruitProducts: Category!
      getElectronicProducts: Category!
      getPharmacyProducts: Category!
      getVegetableProducts: Category!
    }
    
    type Mutation{
      addProduct(name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!
      updateProduct(id: String!, name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!
      deleteProduct(id: String!, category: String!): Product!
    }
    
    type Category {
      category_name: String!
      products: [Product!]!
    }
    
    type Product {
      _id: String!
      name: String!
      image: String!
      current_price: Int!
      old_price: Int 
      key: String!
      qty: String!
    }
`;
