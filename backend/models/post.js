const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [String],
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    thumbnail: {
      type: Object,
      url: {
        type: URL,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamp: true,
  }
);


module.exports = mongoose.model('Post', postSchema)