import React from 'react'

const Header = ({count,setCount}) => {

  console.log(count);
  console.log(setCount);

  return (
      <>
        <header>
            <h1 className="titulo">Administracion Contactos <span>Desarrollo WEB</span></h1>
            <h1>Visita # {count}</h1>
        </header>
      </>
  )
}

export default Header