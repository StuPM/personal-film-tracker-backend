const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { Film } = require("../mongo/schema");
const router = express.Router();

router.post("/", async (req, res) => {
  const newFilm = new Film({ ...req.body });

  await newFilm
    .save()
    .then(() => res.json("Film added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
