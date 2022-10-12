console.log("Conectado...............");

// Importar librerias o JS
import {
    validarFormulario,
    listarContactos
} from './helpers/funciones.js';

// Variables globales y constantes

let formulario = document.querySelector('.formulario');
let enlaceListaContacto = document.querySelector('#lista-contacto');

export let contactos = [];

// Funciones

// Programa Principal


document.addEventListener("DOMContentLoaded", () =>{

    contactos = JSON.parse( localStorage.getItem('contactos') ) || [];
    console.log(contactos);
    
    formulario.addEventListener("submit",validarFormulario );
    enlaceListaContacto.addEventListener("click", listarContactos)
   
});
