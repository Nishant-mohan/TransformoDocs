const mongoose = require('mongoose');

const options = {};
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/transformodocs', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

module.exports = db;