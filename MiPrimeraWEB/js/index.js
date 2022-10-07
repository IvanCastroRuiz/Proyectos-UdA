console.log("Conectado...............");

// Importar librerias o JS


// Variables globales y constantes

let contactos = []; // Vector
let datos = {}; // Objetos Literales

let formulario = document.querySelector('.formulario');

// Funciones

// Funciones Flecha

const mostrarMensaje = (mensaje, error=null) => {

    const alerta = document.createElement('p');

    alerta.innerHTML = mensaje;

    if(error) {
        
        alerta.classList.add('error');

    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

};

const validarFormulario = (e) =>{
    e.preventDefault();

    let nombre = document.querySelector("#nombre").value;    
    let telefono = document.querySelector("#telefono").value;    
    let correo = document.querySelector("#correo").value;    
    let mensaje = document.querySelector("#mensaje").value;    

    // Validamos que todos los campos esten con valor
    if([nombre, telefono, correo, mensaje].includes("")){
        mostrarMensaje("Todos los campos son obligatorios", true);
        return;    }

    // Paso la validacion
    mostrarMensaje("Enviando la información a la base de datos");

    datos = {
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo,
        "mensaje":mensaje
    }

    contactos.push(datos);
    formulario.reset(); // resetea el formulario

    console.log(datos);

};

// Programa Principal

formulario.addEventListener("submit",validarFormulario );