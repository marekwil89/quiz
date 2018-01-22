const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  name: {type: String, default: ''}
});

mongoose.model('category', categorySchema);