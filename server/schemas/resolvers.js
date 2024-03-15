const { Model } = require('../models');

// Example queries and mutations, use model names as necessary

const resolvers = {
  Query: {
    data: async () => {
      return Model.find({});
    },
  },
  Mutation: {
    createData: async (parent, args) => {
      const model = await Model.create(args);
      return model;
    },
  },
};

module.exports = resolvers;
