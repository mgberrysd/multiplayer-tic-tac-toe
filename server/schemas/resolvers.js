const { User } = require('../models');

// Example queries and mutations, use model names as necessary

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('stories');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    updateWins: async (parent, { username }) => {
      const user = await User.findOneAndUpdate(
        { username },
        { $inc: { [`wins`]: 1 } },
        { new: true }
      );
      return user ;
    },
    updateLosses: async (parent, { username }) => {
      const user = await User.findOneAndUpdate(
        { username },
        { $inc: { [`losses`]: 1 } },
        { new: true }
      );
      return user ;
    },
  },
};

module.exports = resolvers;
