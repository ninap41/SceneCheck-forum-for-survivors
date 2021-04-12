const { ObjectID, ObjectId } = require("bson");
var express = require("express");
var router = express.Router();

var threads = require("../models/thread");

// will be api/threads/getAll,
router.get("/:id/all", (req, res) => {
  //get all by board ID
  console.log(String(req.params.id));
  threads.find({ boardId: String(req.params.id) }, (err, documents) => {
    if (!err) {
      console.log(documents);
      res.send(documents);
    } else console.log("could not find any threads");
  });
});

// router.get("/:id", (req, res) => {
//   // one to one.
//   threads.find({}, (err, documents) => {
//     if (!ObjectID.isValid(req.params.id))
//       return res
//         .status(400)
//         .send(`thread with id: ${req.params.id} not found.`);
//     threads.findById(req.params.id, (err, doc) => {
//       if (!err) res.send(doc);
//       else res.send("doc not found: " + JSON.stringify(err, undefined, 2));
//     });
//   });
// });

router.post("/create", (req, res) => {
  var thread = new thread({
    author: res.author,
    content: res.content,
    dateCreated: res.dateCreated,
    replies: res.replies,
    depth: res.depth,
    upvotes: res.upvotes,
    threadId: res.threadId,
  });

  threads.save((err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "thread creation failed!: " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
