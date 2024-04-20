const renderMovies = (movie) => {
    const container = document.getElementById("cardContainer");
    const card = document.createElement("div");
    card.id = "card";
  
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
  
    const titleP = document.createElement("p");
    titleP.innerText = movie.title + " ";
  
    const year = document.createElement("span");
    year.innerText = movie.year;
  
    titleP.appendChild(year);
  
    const durationP = document.createElement("p");
    durationP.innerText = "DURATION: ";
    const durationSpan = document.createElement("span");
    durationSpan.innerText = movie.duration;
    durationP.appendChild(durationSpan);
  
    const directorP = document.createElement("p");
    directorP.innerText = "DIRECTOR: ";
    const directorSpan = document.createElement("span");
    directorSpan.innerText = movie.director;
    directorP.appendChild(directorSpan);
  
    const rateSpan = document.createElement("span");
    const rateP = document.createElement("p");
    rateP.innerText = movie.rate;
    rateSpan.appendChild(rateP);
  
    card.appendChild(img);
    card.appendChild(titleP);
    card.appendChild(durationP);
    card.appendChild(directorP);
    card.appendChild(rateSpan);
  
    container.appendChild(card);
  };

  module.exports = renderMovies