import Venta from '../models/Venta.js';
import Producto from '../models/Producto.js';


/* Funciones */

const getProducto =  async (id, cantidad) =>{
    const producto = await Producto.findById(id);
   
    if(producto.stock === 0){
        console.log(`No hay stock del Producto ${producto.nombre}`);
    }else{
        if((producto.stock - cantidad) < 0){
            console.log(`La cantidad solicitada no la hay ${producto.stock}`);
        }else{
            producto.stock = producto.stock - cantidad;
            console.log(`Venta registrada del  ${producto.nombre} - cantidad ${cantidad}`);
            //await producto.save();
        }
    }
    
};

const prueba = (req, res) => {
    res.send({
        msg: "En esta ruta gestionaremos todas las peticiones correspondiente al modelo de Venta"
    })
};

const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);
        
        // Generar un proceso que actualice el stock del articulo
        venta.articulos.forEach(element => {
            getProducto(element.inf._id, element.cantidad);
        });

        //const ventaGuardado = await venta.save();

        res.json(ventaGuardado);
    } catch (error) {
        console.error(error.message);
    }
};

const getVentas = (req, res) => {};
const getVenta = (req, res) => {};
const updateVentas = (req, res) => {};



export {
    prueba,
    createVentas,
    getVentas,
    getVenta,
    updateVentas
};