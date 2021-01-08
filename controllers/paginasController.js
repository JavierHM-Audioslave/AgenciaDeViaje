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

export const paginaDetalleViaje = async (req, res) => {

    const {viaje} = req.params;

    try {
        const registroViaje = await Viaje.findOne({ where : {slug : viaje} });
        res.render("viaje", {
            pagina: "Información de viaje",
            registroViaje
        });
    } catch(error) {
        console.log(error);
    }
}


export const paginaTestimoniales = (req, res) => {
    
    res.render("testimoniales", {
        pagina: "Testimoniales"
    });
};

