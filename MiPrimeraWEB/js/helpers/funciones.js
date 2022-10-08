

// Bloque de variables y constantes

let formulario = document.querySelector('.formulario');

// Bloque Funciones

const mostrarSpinner = () =>{
    
    const spinnerContenedor = document.querySelector('.contenedor-spinner');

    spinnerContenedor.innerHTML = `
                                    <div class="spinner">
                                        <div class="rect1"></div>
                                        <div class="rect2"></div>
                                        <div class="rect3"></div>
                                        <div class="rect4"></div>
                                        <div class="rect5"></div>
                                    </div> 
                                  `;

    const spinner = document.querySelector('.spinner');
    
    setTimeout(() => {
        spinner.remove();
        mostrarMensaje("Cargado de manera exitosa, pronto te contactaremos");
    }, 3000);

};

const listarContactos = () =>{
    contactos.forEach(contacto => console.log(contacto) )
};

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

export const validarFormulario = (e) =>{
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

    mostrarSpinner();    

    datos = {
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo,
        "mensaje":mensaje
    }

    contactos.push(datos);
    formulario.reset(); // resetea el formulario

    listarContactos();

};