const axios = require("axios");
const renderMovies = require("./renderCards");
const sliderAnimation = require("./slider");
const addGenreBtn = document.getElementById("add-genre");
let currentUrl = window.location.pathname;

const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    data.forEach((movie) => {
      renderMovies(movie);
    });
  } catch (err) {
    console.log(
      "Hubo un error inesperado al momento de pedir la peliculas: ",
      err.message
    );
  }
};

const { addGenreSelect, clearForm, createMovie } = require("./createMoviePage");
addGenreBtn?.addEventListener("click", addGenreSelect);
const clearBtn = document.getElementById("clearBtn");
clearBtn?.addEventListener("click", clearForm);
const submitBtn = document.getElementById("submitBtn");
submitBtn?.addEventListener("click", createMovie);

fetchData();
if(currentUrl === '/' || currentUrl === "/index.html") sliderAnimation()
