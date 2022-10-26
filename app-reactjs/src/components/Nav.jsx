import { Link } from "react-router-dom" 

const Nav = () => {
  return (
    <>
        <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                <Link to="/">Inicio</Link>
                <Link to="contacto">Contactanos</Link>
                <Link to="lista-articulos">Lista Articulos</Link>
            </nav>
        </div>
    </>
  )
}

export default Nav