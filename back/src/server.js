const express = require("express");
const routes = require("./routes");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
