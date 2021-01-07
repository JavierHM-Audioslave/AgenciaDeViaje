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

