import express from 'express';
import { 
    saludo,
    home,
    ladoCuadrado,
    contacto 
} from '../controllers/indexController.js';

const router = express.Router();

// Definimos las rutas
router.get('/', home);
router.get('/saludo', saludo);
router.get('/lado-cuadrado/:numero', ladoCuadrado);
router.get('/contactos', contacto);

export default router