
// Middleware
// req: Informacion que nos llega
// res: La respuesta

const home = (req, res) => {
    res.json({
        msg: 'Mostrando la informacion con JSON'
    })
};

const saludo = (req, res) => {
    res.send(`<h1><strong>Bienvenidos Grupo 17 - 18 UdeA al mundo de ExpressJS</strong><h1>`)
    console.log("Llego una peticion gestionala")
};

const ladoCuadrado = (req, res) => {
    const lado = req.params;
    const { numero } = lado;
    
    res.json({
        msg: `El resultado del lado del cuadro es: ${numero * numero}`  
    })

};

const contacto = (req, res) => {
    const contacto = req.body;
    console.log(contacto);
};

export {
    saludo,
    home,
    ladoCuadrado,
    contacto
}