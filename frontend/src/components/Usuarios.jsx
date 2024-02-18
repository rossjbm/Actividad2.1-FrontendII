import { useState, useEffect } from "react";
import { Paginacion } from "./global/Paginacion"
import { Listar } from "../functions/F_fetch";
import { Loader } from "./global/Loader";
import { RenderizarUsuarios } from "./renderizado/R_usuario";

export function Usuarios() {
    //guardar usuarios actuales
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false) //estado loader

    useEffect( () => {
        async function fetchData() { //fecthData es una funcion asincrona que se permite en React
            try {
                const res = await Listar('usuarios') //llamanos a Listar Fetch
                //solo se mostrarán los usuarios clientes
                const documentos = res.filter(r => r.rol != 'admin')
                setResultado(documentos) 
            } catch (error) {
                console.log('Error', error)
            }
        }
        fetchData();
    }, []);

    useEffect( () => {
        if (resultado === undefined) {
            setCargar(true)
        }
        if (resultado && resultado.length ===0 || resultado) {
            setCargar(false)
        }
    }, [resultado]);


    return(<>
        {cargar ? (
            <>
                <Loader/>
            </>
        ) : (
            <>
                <h1 className="text-center my-14 text-4xl">Clientes Registrados</h1>
                <Paginacion documentos={resultado} Renderizado={RenderizarUsuarios} limite={10} setResultado={setResultado} />
            </>
        )}
    </>)
}