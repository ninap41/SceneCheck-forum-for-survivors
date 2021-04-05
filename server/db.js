const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const mongo_url = "mongodb://localhost:27017/notinourscene-dev";
// Connect MongoDB at default port 27017.
mongoose.connect(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true }, // options to get rid of annoying warnings

  (err) => {
    if (!err) {
      console.log("\x1b[33m%s\x1b[0m", "\n\nMongoDB Connection Succeeded!");
    } else {
      console.log("\x1b[31m", "Error in DB connection: " + err);
    }
  }
);

module.exports = mongoose;
