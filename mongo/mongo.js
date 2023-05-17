const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error."));

db.once("open", function () {
  console.log("Connection ok.");
});

module.exports = db;
