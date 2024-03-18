// Example typedefs
// Should match across models, typedefs, resolvers, and front-end queries

const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    wins: Int
    losses: Int
  }

  type Query {
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateWins(): User
    updateLosses(): User
  }
`;

module.exports = typeDefs;
