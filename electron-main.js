// // const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const db = require("electron-db");

const location = path.join(__dirname, "/src/app/services/");

// // if (db.valid("customers", location)) {
// //   db.insertTableContent("customers", location, obj, (succ, msg) => {
// //     // succ - boolean, tells if the call is successful
// //     console.log("Success: " + succ);
// //     console.log("Message: " + msg);
// //   });
// // }

var express = require("express");

var app_ = express();

app_.get("/", function (req, res) {
  res.json({ foo: "bar" });
});

app_.get("/entries", function (req, res) {
  db.getAll("entries", location, (succ, data) => {
    if (succ) {
      res.json({ entries: data });
    } else {
      console.log("An error has occured. " + data);
    }
  });
});

const server = app_.listen(3000, () =>
  console.log(`Express server listening on port 3000`)
);

module.exports = app_;

const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    backgroundColor: "#000000",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
