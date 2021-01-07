import express from 'express';
import router from "./routes/index.js"
import db from "./config/db.js"

const app = express();

// Conectar a la base de datos //
db.authenticate()
    .then( () => console.log("Base de datos conectada") )
    .catch( error => console.log(error) );

// Definición de puerto //
const port = process.env.PORT || 4000;

// Habilitar pug //
app.set("view engine", "pug");

// Obtener el año actual //  // Cada una de estos métodos en este archivo (index.pug), son middlewares. A diferencia del resto, si éste no lo creo la aplicación funciona bien igual, sólo que en el footer tendría que hardcodear el año. Por lo tanto, de esta forma obtengo el año actual en el que se hace la petición a través de este middleware y ya nunca tendría que hardcodear el año actual a medida que pasen los años. // 
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.anioActual = year.getFullYear();

    res.locals.nombreSitio = "Agencia de viajes";

    return next();  // El return está demás pero a veces el next queda trabado y de esta forma no se traba. //
} )

// Definir la carpeta pública //
app.use(express.static("public"));

// Agregar router //
app.use("/", router);

app.listen(port, () => console.log(`El servidor está funcionando en el puerto ${port}`) );