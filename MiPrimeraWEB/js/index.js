console.log("Conectado...............");

// Importar librerias o JS
import {
    validarFormulario
} from './helpers/funciones.js';

// Variables globales y constantes

let contactos = []; // Vector
let datos = {}; // Objetos Literales

let formulario = document.querySelector('.formulario');

// Funciones

// Programa Principal

formulario.addEventListener("submit",validarFormulario );