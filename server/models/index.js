const mongoose = require('mongoose');

require('dotenv').config();

try {
  mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  throw new Error(err);
}

module.exports = mongoose;
