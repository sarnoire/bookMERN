const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
    updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
