const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicsSchema = new Schema({
  title: String,
  selectedPerson: [String]
});

module.exports = mongoose.model('Topics', topicsSchema);