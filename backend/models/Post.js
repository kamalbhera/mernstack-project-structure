var mongoose = require("mongoose");

var postSchema = new mongoose.Schema(
  {
    // @AssetPlus: Describe schema here
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
