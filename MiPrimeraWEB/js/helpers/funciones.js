

// Bloque de variables y constantes

import { contactos } from '../index.js'; // Vector
let datos = {}; // Objetos Literales

let formulario = document.querySelector('.formulario');

// Bloque Funciones

const generarId = () =>{
    const randon = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return randon + fecha;
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

const limpiarHTML = (listado) => {
    const listadoContactos = document.querySelector(`${listado}`);
    // console.log(listadoContactos);
    if(listadoContactos){
        while(listadoContactos.firstChild){
            listadoContactos.removeChild(listadoContactos.firstChild);
        };
    };
};

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

    // Borrar el formulario
    limpiarHTML("#section-form");

    const tablaContactos = document.querySelector("#section-form");

    tablaContactos.innerHTML = `
                                <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
                                    <div class="flex flex-col mt-100">
                                        <div class="py-2 overflow-x-auto">
                                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                                <table class="min-w-full">
                                                    <thead class="bg-gray-100 ">
                                                        <tr>
                                                            <th id="nombre" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Nombre Cliente
                                                            </th>
                                                            <th id="telefono" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Teléfono
                                                            </th>
                                                            <th id="correo" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Correo
                                                            </th>
                                                            <th id="mensaje" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                    Mensaje
                                                            </th>
                                                            <th id="acciones" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                Acciones
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="listado-contactos" class="bg-white"
                                                    </tbody>    
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            `;
    
        
    contactos.forEach( (contacto) => {

        // Destructuring de objetos
        const { nombre, telefono, mensaje, correo, id } = contacto;

        const listadoContactos = document.querySelector("#listado-contactos");
        listadoContactos.innerHTML += `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <p class="text-gray-600 font-bold"> ${nombre} </p>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                                <p class="text-gray-600">${telefono}</p>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                                <p class="text-gray-600">${correo}</p>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                                <p class="text-gray-600">${mensaje}</p>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                                <a id="editar" href="editar-contacto.html?id=${id}" data-contacto="${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                                <a id="eliminar" href="#" data-contacto="${id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
                                            </td>
                                        </tr>
                                            `; 
    } )
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
                "id": generarId(),
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