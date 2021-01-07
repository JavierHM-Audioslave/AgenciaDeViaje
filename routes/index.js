import express, { Router } from "express";
import { paginaInicio } from '../controllers/paginasController.js';

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", (req, res) => {
    
    res.render("nosotros", {
        pagina: "Nosotros"
    });
});

router.get("/viajes", (req, res) => {
    
    res.render("viajes", {
        pagina: "Viajes"
    });
});

router.get("/testimoniales", (req, res) => {
    
    res.render("testimoniales", {
        pagina: "Testimoniales"
    });
});

export default router;