const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: Number,
  dateReviewed: Date,
  review: String,
});

const filmSchema = new mongoose.Schema({
  id: Number,
  title: String,
  overview: String,
  dateWatched: Date,
  original_title: String,
  original_language: String,
  genre_ids: Object,
  poster_path: String,
  release_date: Date,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  location: Boolean,
});

const Film = mongoose.model("films", filmSchema, "films");
const Review = mongoose.model("reviews", reviewSchema, "reviews");

module.exports = { Film, Review };
