const Post = require("./post.js");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ThreadSchema = new Schema({
  author: { type: String },
  title: { type: String, required: true },
  tags: { type: Array, required: false },
  description: { type: String, required: true },
  dateCreated: { type: Date },
  boardId: { type: String, required: true },
  lastActive: { type: Date, required: false },
  topPoster: { type: String, required: false },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});
var thread = mongoose.model("Threads", ThreadSchema);
module.exports = thread;

// var sample = {
//   author: "getem27",
//   title: "Tired",
//   description: "abusers in the scene",
//   dateCreated: new Date(),
//   lastActive: "getem27",
//   topPoster: "getem27",
//   posts: [],
// };
