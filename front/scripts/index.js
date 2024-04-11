const renderMovies = require("./renderCards")
const sliderAnimation = require("./slider")

$.get("https://students-api.up.railway.app/movies", (data) => {
  data.forEach((movie) => renderMovies(movie));
}).fail(()=>{alert("Error al obtener las peliculas  ")});

sliderAnimation();