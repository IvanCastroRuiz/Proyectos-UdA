import { useParams, Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const DetalleArticulo = () => {
  const params = useParams();
  const { id } = params;
  const [ articulo, setArticulo ] = useState({});
  useEffect( () => {
    const consultarApi = async () =>{
        try {
            const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`);
            const resultado = await respuesta.json();
            setArticulo(resultado);
        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarApi();
  },[]);
  const { _id, nombre, precio, descripcion, imagen } = articulo;
  return (
    <> 
        {
            _id
                ? 
                    <div>
                        <div>
                            <h2>
                                <strong>{ nombre } </strong>
                            </h2>    
                            <img layout='responsive' width="100" height="220" src={imagen.url} alt={articulo.nombre} />

                            <p>
                                { descripcion }
                            </p>

                            <p>
                                <h3><strong>Precio: {" "} { precio }</strong></h3>
                            </p>
                            
                        </div>       
                    
                        <div>
                            <Link
                                to="/lista-articulos"
                            >
                                Regresar Lista Articulos
                            </Link>
                        </div>

                    </div>
                :
                    <p>
                        No hay informacion del producto, intentanuevamente.
                    </p> 
        }
    </>
  )
}

export default DetalleArticulo