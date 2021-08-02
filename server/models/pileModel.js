const mongoose = require('./index');

const { Schema } = mongoose;

const PileSchema = new Schema({
  id: {
    type: Number,
  },
  types: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  amountOfItems: {
    type: Number,
    required: true,
  },
  whatsLeft: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictureUri: {
    type: String,
    required: true,
  },

});

const Pile = mongoose.model('Pile', PileSchema);

module.exports = Pile;
