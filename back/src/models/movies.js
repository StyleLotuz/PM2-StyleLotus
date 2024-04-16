class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || !poster || !director) {
      throw new Error(
        "El titulo, poster y director son propiedades necesarias"
      );
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = Movie;
