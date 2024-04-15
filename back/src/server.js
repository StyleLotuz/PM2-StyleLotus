const express = require("express")

app = express()
app.listen(3000,()=> console.log("El server se esta ejecutando"));

module.exports = app