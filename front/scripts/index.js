const renderMovies = require("./renderCards");
const sliderAnimation = require("./slider");
const addGenreBtn = document.querySelector(".add-genre");
const options = require('./options')

console.log(addGenreBtn)

const axios = require("axios");

const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    data.forEach((movie) => {
      renderMovies(movie);
    });
  } catch (err) {
    console.log("Hubo un error inesperado al momento de pedir la peliculas: ", err.message)
  }
};

fetchData();
sliderAnimation();
