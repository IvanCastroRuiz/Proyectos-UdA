import React from 'react'

const Articulo = ({articulo}) => {

  const { _id, nombre, descripcion, precio, imagen } = articulo;

  //console.log(_id, nombre, descripcion, precio, imagen.url);

  return (
    <div className="listado-guitarra">
        <img layout='responsive' width="100" height="220" src={`${imagen.url}`} alt={`${nombre}`}/>
    </div>
  )
}

export default Articulo