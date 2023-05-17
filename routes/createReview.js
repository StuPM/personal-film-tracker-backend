const express = require("express");
const mongoose = require("mongoose");
const schema = require("../mongo/schema");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
