import { Viaje } from "../models/Viaje.js";


export const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio"
    });
};


export const paginaNosotros = (req, res) => {
    
    res.render("nosotros", {
        pagina: "Nosotros"
    });
};

export const paginaViajes = async (req, res) => {

    // Consultar base de datos //
    const viajes = await Viaje.findAll();
    
    res.render("viajes", {
        pagina: "Próximos viajes",
        viajes
    });
};


export const paginaTestimoniales = (req, res) => {
    
    res.render("testimoniales", {
        pagina: "Testimoniales"
    });
};

