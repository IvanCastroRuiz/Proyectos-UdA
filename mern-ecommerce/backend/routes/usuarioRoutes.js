import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    auntenticar,
    perfil
} from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);

// Rutas para la gestion de los usuarios
router.post('/', registrar );
router.get('/confirmar/:token', confirmar);
router.post('/login', auntenticar);

// Rutas Protegidas atraves del middleware checkAuth
// Identificamos el usuario y se identifica para mostrale los datos o funcionalidades que le corresponden.
router.get('/perfil', checkAuth , perfil);


export default router;