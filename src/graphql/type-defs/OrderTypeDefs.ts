import {gql} from "apollo-server-express"

export const orderTypeDefs = gql`
  type Query{
      getAllPendingOrders: [Order]
      getAllCompletedOrders: [Order]
      getUserOrders(user_id: String!): [Order]
    }

  type Order{
      _id: String!
      user_id: String!
      date: String!
      discount: Int!
      sub_total: Int!
      status: Boolean!
      order_list: [OrderItem!] 
      delivery: Delivery
      shipping: Shipping
    }
  
  type OrderItem{
      _id: String!
      name: String
      unit_price: String!
      qty: String!
      price: Int!
  }
  
  type Delivery{
      address: String!
      full_name: String
      city: String!
      country: String!
      postal_code: Int!
      email: String!
      tel: String!
  }
  
  type Shipping{
      address: String!
      full_name: String
      city: String!
      country: String!
      postal_code: Int!
      instructions: String
      tel: String!
  }
`;

