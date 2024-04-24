const moviesServices = require("../services/moviesServices");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req, res) => {
  const movies = await moviesServices.getMovies();
  res.status(200).json(movies);
};

const createMovie = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const newMovie = await moviesServices.createMovie({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  res.status(201).json(newMovie);
};

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  createMovie: catchAsync(createMovie),
};
