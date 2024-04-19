const validateMovies = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    next("Todos los datos son obligatorios")
  }

  if (isNaN(year) || year.toString().length !== 4) {
    next("El año debe tener una longitud de 4 digitos")
  }

  if(isNaN(rate) || rate < 0  || rate > 10){
    next("La calificacion debe ser un numero y estar en 0 y 10")
  }
  next();
};


module.exports = validateMovies