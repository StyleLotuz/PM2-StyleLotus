const moviesServices = require("../services/moviesServices")

module.exports = {
    getAllMovies : async (req, res) =>{
        const movies = await moviesServices.getMovies();
        res.status(200).json(movies)
    }
}