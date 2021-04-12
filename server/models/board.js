const Thread = require("./post.js");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },

  // threads: [{ type: Schema.Types.ObjectId, ref: "Thread" }],
});
var boards = mongoose.model("Board", BoardSchema);
module.exports = boards;

// var sample = {
//   author: "getem27",
//   title: "Tired",
//   description: "abusers in the scene",
//   dateCreated: new Date(),
//   lastActive: "getem27",
//   topPoster: "getem27",
//   posts: [],
// };
