var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String },
  dateCreated: { type: Date },
  replies: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  depth: { type: Number },
  upvotes: { type: Number },
  boardId: { type: Schema.Types.ObjectId, ref: "board" },
});

var post = new mongoose.model("Post", PostSchema);
module.exports = post;

var sample = {
  author: "getEm23",
  content: "Sample content",
  dateCreated: new Date(),
  replies: [],
  depth: 0,
  upvotes: 1,
  boardId: "60600374470693620fef0f7c",
};
