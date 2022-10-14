console.log("Starting");

// Bloq import


// Bloq variables y constantes

// Bloq Funciones

const listarGuitarras = (resultado) =>{

    resultado.forEach( (articulo) =>{
        // Destructuring
        const {id, nombre, descripcion, precio, imagen } = articulo;
        const { url } = imagen;

        const contenedorImagen = document.querySelector("#container-imagen");


        contenedorImagen.innerHTML += ` 
                                        <div>
                                            <div>
                                                <strong>ID: </strong>${id}
                                            </div>  
                                            <div>
                                                    <strong>Nombre: </strong> ${nombre}
                                            </div> 
                                            <div>
                                                    <img src="${url}" alt="${nombre}" >
                                            </div>
                                            <div>
                                                    <strong>Descripcion: </strong> ${descripcion}
                                            </div> 
                                            <div>
                                                    <strong>Precio: </strong> ${precio}
                                            </div> 
                                        </div>
                                        <hr/>
                                        <br/>
                                    `;
    } );


};


// Asyncronas
const consultarApi = async () =>{

    try {
        
        const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/");
        const resultado = await respuesta.json();
        
        listarGuitarras(resultado);

    } catch (error) {
        console.log("Error: " + error.message);
    }


};

// Bloqb Programa Principal
consultarApi();