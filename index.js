
const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();



//Crear el servidor de express 
const app = express();

dbConnection();

app.use(cors())

//Rutas

app.use(express.static("public"));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/event", require("./routes/events"));


//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});

