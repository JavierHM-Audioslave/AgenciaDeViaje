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

export const paginaViajes = (req, res) => {
    
    res.render("viajes", {
        pagina: "Viajes"
    });
};


export const paginaTestimoniales = (req, res) => {
    
    res.render("testimoniales", {
        pagina: "Testimoniales"
    });
};

