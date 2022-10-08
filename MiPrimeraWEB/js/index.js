console.log("Conectado...............");

// Importar librerias o JS
import {
    validarFormulario
} from './helpers/funciones.js';

// Variables globales y constantes

let formulario = document.querySelector('.formulario');

// Funciones

// Programa Principal

formulario.addEventListener("submit",validarFormulario );