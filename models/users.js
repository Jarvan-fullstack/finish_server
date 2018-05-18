const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  identity: String,
  isSelected: Boolean,
});

module.exports = mongoose.model('Users', usersSchema);