import express from "express";

const app = express();

// Definición de puerto //
const port = process.env.PORT || 4000;

app.listen( () => console.log(`El servidor está funcionando en el puerto ${port}`) );