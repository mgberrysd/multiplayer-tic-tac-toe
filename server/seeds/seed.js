const db = require('../config/connection');
// Require any models that need to be seeded
const { Model } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = require('./seedData.json');

db.once('open', async () => {
  await cleanDB('Model', 'models');

  await Model.insertMany(seedData);

  console.log('Database seeded!');
  process.exit(0);
});
