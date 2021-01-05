import express, { Router } from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("inicio");
});

router.get("/nosotros", (req, res) => {
    
    const viajes = "Viaje a Argentina";
    res.render("nosotros", {
          textoViajes: viajes // Esta línea es un nombreDeVariableAEnviarALaVista: nombreDeLaVariableQueTieneElContenidoActualmente. Si el nombre de la clave debe ser igual al nombre de la variable con el valor, entonces en esta línea sólo pondriamos "viajes". //
    });
});

export default router;