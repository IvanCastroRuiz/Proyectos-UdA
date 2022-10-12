

// Bloque de variables y constantes

import { contactos } from '../index.js'; // Vector
let datos = {}; // Objetos Literales

let formulario = document.querySelector('.formulario');

// Bloque Funciones

const sincronizarLocalStorage = (contactos) =>{

    localStorage.setItem('contactos', JSON.stringify( contactos) );
}

const mostrarSpinner = () =>{
    
    let x = 4;

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

export const listarContactos = () =>{
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
        return;    
    }

    // Paso la validacion

    Swal.fire({
        title: 'Estas seguro de guardar?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')

          //
          mostrarSpinner();    

            datos = {
                "nombre": nombre,
                "telefono": telefono,
                "correo": correo,
                "mensaje":mensaje
            }

            contactos.push(datos);

            // Guardar en LocalStorage

            sincronizarLocalStorage(contactos);

            console.log(contactos);
            formulario.reset(); // resetea el formulario

        } else if (result.isDenied) {
            Swal.fire('No guardado', '', 'info')
        }
    })

    //listarContactos();

};