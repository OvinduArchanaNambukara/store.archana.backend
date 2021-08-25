import {gql} from "apollo-server-express"

export const userTypeDefs = gql`
  type Mutation{
      signIn(email: String!, password: String!): User!
      signUp(email: String!, password: String!, first_name: String!, last_name: String!): User!
    }
    
  type User{
      token: String!
      role: String!
    }
`
