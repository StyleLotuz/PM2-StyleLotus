const moviesServices = require("../services/moviesServices");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getMovies();
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  createNewMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await moviesServices.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      });
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json({ message: `${err}` });
    }
  },
};
