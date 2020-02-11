// modulo para crear un servidor http
const http = require("http")

// createServer me retorna un objeto | cuando termines de crear este servidor ejecuta el callback, recibe por parametro la peticion (request | req) y la respuesta del server (response | res) | cuando el servidor ya este inicializado, le decimos en que puerto va a escuchar mi servidor y cuando escuche muestre por consola un mensaje
const server = http.createServer( (req, res) => {
    // respondo el codigo de estado es 200, en la cabecera de la peticion mando el tipo de texto que retorna el servidor y termino la respuesta con un hola mundo
    res.status = "200";
    res.setHeader("Content-Type", "text/plain")
    res.end("hola mundo")
})

server.listen(2800, () => {
    console.log("Servidor disponible en el puerto 2800")
})