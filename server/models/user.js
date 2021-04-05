const { getLocaleDateTimeFormat } = require("@angular/common");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
class FriendRequest {
  userName;
  dateSent;
}
var UserSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friendRequests: [{ type: FriendRequest }],
  about: { type: String, required: false },
  lastActive: { type: Date, required: false },
  favoritesboards: [{ type: Schema.Types.ObjectId, ref: "board" }],
  favoritedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  authoredPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  authoredboards: [{ type: Schema.Types.ObjectId, ref: "board" }],
});
var User = mongoose.model("User", UserSchema);
module.exports = User;

var sample = {
  userName: "getEm23",
  password: "password",
  friends: [],
  friendRequests: [],
  about: "",
  lastActive: new Date(),
  favoritesboards: [],
  favoritedPosts: [],
  authoredPosts: [],
  authoredboards: [],
};
