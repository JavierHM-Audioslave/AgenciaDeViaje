import express, { Router } from "express";
import { paginaInicio, paginaNosotros } from '../controllers/paginasController.js';

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

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