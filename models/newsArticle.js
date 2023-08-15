const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsArticleSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.Mixed,
      required: true,
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NewsArticle", newsArticleSchema);
