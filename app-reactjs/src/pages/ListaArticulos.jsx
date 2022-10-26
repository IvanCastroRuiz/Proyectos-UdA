import  { useState , useEffect }  from 'react'

import Articulo from '../pages/Articulo';

const ListaArticulos = () => {
  const [ consulta, setConsulta ]  = useState([]); 

  useEffect(() =>{
    const consultarApi = async () =>{
        try {
            const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/");
            const resultado = await respuesta.json();
            setConsulta(resultado);
        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarApi();
  }, []);  

  return (
    <div className="listado">
        
       {
        consulta.length > 0 
                ?
                    <div>

                        {
                            consulta.map( articulo => (
                                <Articulo
                                    key={articulo._id}
                                    articulo={articulo}
                                />
                            ) )   

                        }

                    </div>
                :
                    <div>
                        <p>No hay articulos</p>
                    </div>
       } 

    </div>
  )
}
export default ListaArticulos