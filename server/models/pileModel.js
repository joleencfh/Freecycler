const mongoose = require('./index');

const { Schema } = mongoose;

const PileSchema = new Schema({
  id: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coords: {
    type: { lat: Number, lon: Number },
    required: false,
  },
  owner: {
    type: String,
    required: false,
  },
  amountOfItems: {
    type: String,
    required: true,
  },
  whatsLeft: {
    type: Number,
    required: false,
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
