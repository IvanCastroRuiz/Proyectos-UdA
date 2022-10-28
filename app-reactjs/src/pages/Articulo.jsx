import { Link } from 'react-router-dom';
import React from 'react'

const Articulo = ({articulo}) => {

  const { _id, nombre, descripcion, precio, imagen } = articulo;

  //console.log(_id, nombre, descripcion, precio, imagen.url);

  return (
    <div  
      className="listado-guitarra"
    >
        <div>
          <strong>Nombre:</strong> { nombre }
        </div>
        <img layout='responsive' width="100" height="220" src={imagen.url} alt={nombre}/>

        <div>
            <div>
              <strong>Precio:</strong> $ { precio }
            </div>

            <Link
              id={`${_id}`}
              to={`/articulo/${_id}`}
            >
               Ver detalle
            </Link>

        </div>
   </div>
  )
}

export default Articulo