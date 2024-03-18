const mongoose = require('mongoose');

// Change DB name as desired

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ticTacToe');

module.exports = mongoose.connection;
