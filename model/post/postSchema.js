const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: String,
    required: true,
    trim: true
  },
  content: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('post',postSchema);
