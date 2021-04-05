const { ObjectID } = require("bson");
var express = require("express");
var router = express.Router();

var board = require("../models/board");

// will be api/boards/getAll,
router.get("/all", (req, res) => {
  board.find({}, (err, documents) => {
    if (!err) {
      res.send(documents);
    } else console.log("could not find any boards");
  });
});

router.get("/:id", (req, res) => {
  board.find({}, (err, documents) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send(`board with id: ${req.params.id} not found.`);
    board.findById(req.params.id, (err, doc) => {
      if (!err) res.send(doc);
      else res.send("doc not found: " + JSON.stringify(err, undefined, 2));
    });
  });
});

router.post("/create", (req, res) => {
  var board = new board({
    author: res.author,
    content: res.content,
    dateCreated: res.dateCreated,
    replies: res.replies,
    depth: res.depth,
    upvotes: res.upvotes,
    boardId: res.boardId,
  });

  board.save((err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "board creation failed!: " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
