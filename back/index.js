const dbCon = require("./config/dbCon");
const app = require("./src/server");

dbCon().then((res)=>{
  app.listen(3000, () => {
    console.log("El servidor se esta escuchando en el puerto 3000");
  });
}).catch((error)=>{
  console.log("Hubo un error al conectar con la base datos", error)
})
