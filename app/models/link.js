const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  card: {
    caption: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  datetime: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String],
    index: true
  },
  shortId: {
    type: String,
    index: true,
    required: true,
  }
});

module.exports = mongoose.model('Link', linkSchema);
