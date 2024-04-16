const express = require("express");
const routes = require("./routes");
const app = express();

const morgan = require("morgan");
const cors = require("cors")

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use(routes);

module.exports = app;
