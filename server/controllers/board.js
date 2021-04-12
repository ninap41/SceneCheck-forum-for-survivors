const { ObjectID } = require("bson");
var express = require("express");
var router = express.Router();

var boards = require("../models/board");

// will be api/boards/getAll,
router.get("/all", (req, res) => {
  boards.find({}, (err, documents) => {
    if (!err) {
      console.log("boards retrieved");
      res.send(documents);
    } else console.log("could not find any boards");
  });
});

router.get("/:id", (req, res) => {
  boards.find({}, (err, documents) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send(`board with id: ${req.params.id} not found.`);
    boards.findById(req.params.id, (err, doc) => {
      if (!err) res.send(doc);
      else res.send("doc not found: " + JSON.stringify(err, undefined, 2));
    });
  });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  var board = {
    name: req.body.name,
    description: req.body.description,
  };

  boards.create(board, (err, doc) => {
    if (err) {
      console.log(
        "board creation failed!: " + JSON.stringify(err, undefined, 2)
      );
    } else {
      console.log("board created?");
    }
  });

  // boards.save((err, doc) => {
  //   if (!err) res.send(doc);
  //   else
  //     console.log(
  //       "board creation failed!: " + JSON.stringify(err, undefined, 2)
  //     );
  // });
});

module.exports = router;
