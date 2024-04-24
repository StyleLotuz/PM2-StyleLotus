const Movie = require("../models/movies");
const MovieModel = require("../models/moviesModel");

module.exports = {
  getMovies: async (res, req) => {
    try {
      const moviesData = await MovieModel.find();
      const movies = moviesData.map(
        (movie) =>
          new Movie(
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.genre,
            movie.rate,
            movie.poster
          )
      );

      return movies;
    } catch (err) {
      res
        .status(404)
        .json({ message: "Hubo un error al encontrar las peliculas" });
    }
  },

  createMovie: async (data) => {
    let newMovie = MovieModel.create(data);
    return newMovie;
  },
};
