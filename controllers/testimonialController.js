export const guardarTestimonial = (req, res) => {

    const {nombre, correo, mensaje} = req.body;
    // console.log(nombre + "-" + "correo" + "-" + mensaje);
    const errores = [];

    if( nombre.trim() === "" ) {
        errores.push("No se ha ingresado el nombre");
    }
    if( correo.trim() === "" ) {
        errores.push("No se ha ingresado el correo")
    }
    if( mensaje.trim() === "" ) {
        errores.push("No se ha ingresado el mensaje")
    }

    if( errores.length > 0 ) {
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        // HACER MAÑANA: el bloque 'else' debe guardar en la base de datos y ver qué vista mostrar porque la que muestra ahora la puse sólo para que devuelva algo //



        res.render("testimoniales", {
            pagina: "TESTIMONIO INGRESADO CORRECTAMENTE"
        })
    }
}