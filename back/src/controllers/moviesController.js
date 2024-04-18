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
};
