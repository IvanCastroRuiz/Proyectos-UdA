console.log("Conectado...............");

// Importar librerias o JS


// Variables globales y constantes

let formulario = document.querySelector('.formulario');

// Funciones

// Funciones Flecha

const mostrarMensaje = (mensaje, error=null) => {

    if(error) {
        console.log("error");
    }else{
        console.log("correcto");
    }

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
        return;
    }

    // Paso la validacion
    mostrarMensaje("Enviando la información a la base de datos");

};


// Programa Principal

formulario.addEventListener("submit",validarFormulario );