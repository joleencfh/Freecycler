const {UpdateSchema} = require(__dirname +'/Update.js');
const mongoose = require('./index');
const { Schema } = mongoose;

const PileSchema = new Schema({
  types: {
    type:  [String],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  numItems: {
    type: String,
    required: true,
  },
  coords: {
    type: { lat: Number, lon: Number },
    required: false,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: false,
  },
  whatsLeft: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  updates: {
    type: [UpdateSchema],
    required: false,
  }

});

const Pile = mongoose.model('Pile', PileSchema);

module.exports = Pile;
