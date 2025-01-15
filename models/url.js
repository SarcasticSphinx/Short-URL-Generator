const mongoose = require("mongoose");

const urlShema = new mongoose.Schema({
  short_URL: {
    type: String,
    required: true,
    unique: true,
  },
  redirect_url: {
    type: String,
    required: true,
  },
  visited_history: [
    {timestamps: {type: Number}}
  ]
},{timestamps: true});

const url_model = mongoose.model('url', urlShema)

module.exports = url_model