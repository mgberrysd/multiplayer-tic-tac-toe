// Example typedefs
// Should match across models, typedefs, resolvers, and front-end queries

const typeDefs = `
  type Model {
    _id: ID!
    name: String!
    data1: String!
    data2: String!
  }

  type Query {
    data: [Model]
  }

  type Mutation {
    createData(data1: String!, data2: String!): Model
  }
`;

module.exports = typeDefs;
