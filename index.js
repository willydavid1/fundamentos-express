// importamos el modulo express | al ejecutar express esto me devuelve un objeto que es el servidor
const express = require("express");
const morgan = require("morgan") 
const app = express();


// Middlewares - es un manejador de peticion, y se ejecuta antes que lleguen a cualquier ruta | Para usar el Middleware se llaman asi: app.use(logger)
// const logger = (req, res, next) => {
//   console.log(`Ruta recibida: ${req.protocol}://${req.get('host')}${req.originalUrl} | en la IP: ${req.ip}`)

//   next()
// }


// le decimos al servidor que entienda los formatos json, antes de que llegue a cualquier ruta
app.use(express.json());
app.use(morgan("dev")) //usa el Middleware morgan es un manejador de peticion y se ejecuta antes que lleguen a cualquier ruta
// app.use(logger)

// PARA RECIBIR EN UNA RUTA TODAS LAS PETICIONES HTTP y para seguir con una ruta que se llama igual tengo que decirle next() para que se ejecuten las rutas que tengan ese nombre /user
// app.all("/user", (req, res, next) => {
//     console.log("por aqui paso (all)")

//     next() //continua con la siguiente ruta en este caso /user
// })


// servidor cuando recibas una peticion get en la ruta /user, ejecuta el callback y como respuesta le voy a enviar un json (ese metodo json recibe un objeto)
app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe",
    locacion: "colombia"
  });
});

// RUTAS CON METODOS POST, PUT, DELETE
// ruta recibe un id por parametro
app.post("/user/:id", (req, res) => {
  console.log(req.body); // PARA VER LOS DATOS JSON QUE ME ENVIA EL CLIENTE en el cuerpo de la peticion
  console.log(req.params) // req.params RETORNA UN OBJETO CON UN ATRIBUTO ID CON VALOR DE LA URL { id: '456' }
  
  res.send("PETICION POST RECIBIDA");
});

// recibimos de la peticion: un parametro por URL y un json en el cuerpo de la peticion a modificar
app.put("/user/:id", (req, res) => {
  console.log(req.body); // PARA VER LOS DATOS JSON QUE ME ENVIA EL CLIENTE en el cuerpo de la peticion
  res.send(`Usuario ${req.params.id} actualizado recibi el id por URL y el JSON en el cuerpo de la peticion | PUT`);
});


app.delete("/user/:userId", (req, res) => {

  // responde el usuario tal que me llego por parametro
  res.send(`usuario ${req.params.userId} ha sido eliminado xD y fue el que me mandaste por parametro de URL`);
});


// usa el Middleware static que viene dentro de express y le paso el nombre de la carpeta, se ejecuta en / porque no hay una ruta / y retorna el html
app.use(express.static("public"))



// servidor o app quiero que escuches en el puerto 3000 y cuando inicies ejecuta el mensaje por consola
app.listen(5000, () => {
  console.log("Servidor express disponible en el puerto 5000");
});
