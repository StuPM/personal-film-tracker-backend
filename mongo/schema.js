const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: Number,
  dateReviewed: Date,
  location: Boolean,
  review: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
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
});

module.exports = { reviewSchema: reviewSchema, filmSchema: filmSchema };
