const moviesController = require("./src/controllers/moviesController")
const app = require("./src/server")

app.get("/movies", moviesController.getAllMovies)