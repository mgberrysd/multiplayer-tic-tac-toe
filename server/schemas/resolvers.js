const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Example queries and mutations, use model names as necessary

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
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
    updateWins: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $inc: { [`wins`]: 1 } },
          { new: true }
        );
        return user;
      }
      throw AuthenticationError;
    },
    updateLosses: async (parent, args, context) => {
      if (context.user) {

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $inc: { [`losses`]: 1 } },
          { new: true }
        );
        return user;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
