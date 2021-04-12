var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const { mongoose } = require("./db.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

var ThreadsController = require("./controllers/thread");
app.use("/threads", ThreadsController);

var BoardsController = require("./controllers/board");
app.use("/boards", BoardsController);

// app.get("/test", (req, res) => res.json({ Hello: "world" }));

const server = app.listen(3000, () =>
  console.log(
    "\x1b[1m",

    `\n\nExpress server listening on port 3000`
  )
);

module.exports = app;
