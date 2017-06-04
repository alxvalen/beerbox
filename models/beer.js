const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  title: String,
  author: String,
  brewed: Date,
  tapped: Date,
  vol: Number
});

const Beer = mongoose.model('beer', beerSchema);

module.exports = Beer;
