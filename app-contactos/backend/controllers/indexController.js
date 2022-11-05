
// Middleware
// req: Informacion que no llega
// res: La respuesta
const saludo = (req, res) => {
    res.send(`<h1><strong>Bienvenidos Grupo 17 - 18 UdeA al mundo de ExpressJS</strong><h1>`)
    console.log("Llego una peticion gestionala")
};

export {
    saludo
}