const mongoose = require("mongoose");

mongoose.connect(process.env.PRODUCTION, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error."));

db.once("open", function () {
  console.log("Connection ok.");
});

module.exports = db;
