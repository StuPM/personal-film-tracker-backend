const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { Film } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await Film.aggregate([
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
