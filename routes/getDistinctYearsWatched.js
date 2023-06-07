const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { filmSchema } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  //no query
  //get distinct year from dateWatched
  //return years

  const Films = mongoose.model("films", filmSchema, "films");
  const results = await Films.aggregate([
    {
      $group: {
        _id: null,
        years: {
          $addToSet: {
            $dateToString: {
              date: "$dateWatched",
              format: "%Y",
            },
          },
        },
      },
    },
    {
      $set: {
        years: {
          $map: {
            input: "$years",
            in: {
              $toInt: "$$this",
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        years: 1,
      },
    },
  ]);

  res.send(results);
});

module.exports = router;
