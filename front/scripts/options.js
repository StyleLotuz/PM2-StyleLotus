const genreContainer = document.getElementById("genre-container");
const inputs = document.querySelectorAll("form input, form select");
const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("submitBtn");

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

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Logica");
});

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

document.getElementById("add-genre").addEventListener("click", addGenreSelect);
clearBtn.addEventListener("click", clearForm);


