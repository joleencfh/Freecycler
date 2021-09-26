const mongoose = require('./index');
const { Schema } = mongoose;

const UpdateSchema = new Schema({
  pileId: {
      type: String,
      required: true,
  },
  time: {
      type: String,
      required: true,
  },
  text: {
      type: String,
      required: true,
  },
  user: {
      type: String,
      required: true,
  },
  picture: {
      type: String, 
      required: false,
  },
  whatsLeft: {
      type: String,
      required: false,
  }
});

const Update = mongoose.model('Update', UpdateSchema);

module.exports = Update;
