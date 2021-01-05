import express from 'express';
import router from "./routes/index.js"

const app = express();

// Definición de puerto //
const port = process.env.PORT || 4000;

// Agregar router //
app.use("/", router);

app.listen(port, () => console.log(`El servidor está funcionando en el puerto ${port}`) );