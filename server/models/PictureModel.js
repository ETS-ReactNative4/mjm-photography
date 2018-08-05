const mongoose = require("mongoose");


const schema = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  thumb: {
    required: false,
    type: String
  },
  full: {
    require: false,
    type: String
  },
  year: {
    require: false,
    type: String
  },
  location: {
    require: false,
    type: String
  },
  format: {
    require: false,
    type: String
  },
  notes: {
    require: false,
    type: String
  }
});

module.exports = mongoose.model("Picture", schema);
