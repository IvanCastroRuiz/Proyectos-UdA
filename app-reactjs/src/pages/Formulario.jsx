import { useState }  from 'react'

const Formulario = () => {

   

    const [ nombre, setNombre ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ correo, setCorreo ] = useState("");
    const [ mensaje, setMensaje ] = useState("");

    const [ alerta, setAlerta ] = useState({});


    const handletSubmit = (e) => {
        e.preventDefault();

        if([nombre, telefono, correo, mensaje].includes("")){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }

        setAlerta({
            msg: "Informacion enviada exitosamente"
        })


    };

    return (
        
        <section id="section-form">
            <form 
                id="form"
                className="formulario"
                onSubmit={handletSubmit}
            >
                <fieldset>
                    <legend>Contactenos llenado todos los campos</legend>
                    <div className="contenedor-campos">
                        <div className="campos">
                            <label>Nombre</label>
                            <input 
                                id="nombre" 
                                name="nombre" 
                                type="text" 
                                placeholder="Tu nombre" className="input-text"
                                value={nombre} 
                                onChange={ (e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="campos">
                            <label>Telefono</label>
                            <input 
                                id="telefono" 
                                type="tel" 
                                placeholder="Tu telefono" 
                                className="input-text" 
                                value={telefono} 
                                onChange={ (e) => setTelefono(e.target.value)}
                            />
                        </div>
                        <div className="campos">
                            <label>Correo</label>
                            <input 
                                id="correo" 
                                type="email" 
                                placeholder="Tu Email" 
                                className="input-text"
                                value={correo} 
                                onChange={ (e) => setCorreo(e.target.value)} 
                            />
                        </div>
                        <div className="campos">
                            <label>Mensaje</label>
                            <textarea 
                                id="mensaje" 
                                name="mensaje" 
                                className="input-text" 
                                placeholder="Tu mensaje" 
                                value={mensaje} 
                                onChange={ (e) => setMensaje(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Operador Ternario */}
                    {
                        alerta &&
                            (<p className={ ` ${alerta.error} ` ? 'error' : 'correcto' } >{alerta.msg}</p>)
                        
                    }

                    <div className="contenedor-spinner">
                    </div>
                    <div className="alinear-derecha flex">
                        <input className="boton w-100" type="submit" defaultValue="Enviar" />
                    </div>
                </fieldset>
                {/*  */}
            </form>
        </section>

    )
};

export default Formulario