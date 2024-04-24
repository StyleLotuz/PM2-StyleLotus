const genreContainer = document.getElementById("genre-container");
const inputs = document.querySelectorAll("form input, form select");
const axios = require("axios");

function clearForm() {
  inputs.forEach((input) => {
    if (input.tagName === "SELECT") input.selectedIndex = 0;
    else input.value = "";
  });

  let children = genreContainer.children;
  for (let i = children.length - 2; i > 0; i--) {
    genreContainer.removeChild(children[i]);
  }
}

async function createMovie(event) {
  event.preventDefault();
  let OK = true;
  inputs.forEach((input) => {
    if (input.tagName === "SELECT" && input.selectedIndex === 0) {
      alert("Seleccione un género al menos");
      OK = false;
      return;
    }
    if (input.tagName === "INPUT" && !input.value.trim()) {
      alert("Complete todos los campos");
      OK = false;
      return;
    }
  });
  if (OK) {
    const title = inputs[0].value;
    const year = parseInt(inputs[1].value);
    const director = inputs[2].value;
    const duration = `${inputs[3].value} h ${inputs[4].value} min`;
    const rate = parseFloat(inputs[6].value);
    const poster = inputs[7].value;
    let genre = [];
    const selects = genreContainer.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
      let valorActual = selects[i].value;
      genre.push(valorActual);
    }
    axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
  }
}

function addGenreSelect() {
  let generos = [
    "Acción",
    "Aventura",
    "Animación",
    "Comedia",
    "Drama",
    "Terror",
    "Ciencia Ficción",
    "Fantasía",
    "Romance",
    "Thriller",
    "Crimen",
    "Misterio",
    "Documental",
    "Musical",
    "Western",
    "Guerra",
    "Historia",
    "Biografía",
    "Deporte",
    "Familia",
    "Animales",
    "Superhéroes",
    "Suspenso",
    "No Ficción",
    "Cine Negro",
    "Infantil",
    "Experimental",
    "Romántica",
    "Erótica",
    "Histórico",
    "Psicológica",
    "Anime",
    "Independiente",
  ];

  const select = document.createElement("select");
  select.classList.add("form-control", "m-1");
  select.required = true;

  const predeterminada = document.createElement("option");
  predeterminada.value = "";
  predeterminada.textContent = "Seleccione un género";
  select.appendChild(predeterminada);

  generos.forEach(function (genero) {
    const option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    select.appendChild(option);
  });

  genreContainer.appendChild(select);
}

module.exports = {
  addGenreSelect,
  clearForm,
  createMovie,
};
