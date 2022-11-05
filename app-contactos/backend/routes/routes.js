import express from 'express';
import { 
    saludo 
} from '../controllers/indexController.js';

const router = express.Router();

// Definimos las rutas
router.get('/saludo', saludo);

export default router