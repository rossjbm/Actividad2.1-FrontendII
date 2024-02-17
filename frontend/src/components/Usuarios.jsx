import { useState, useEffect } from "react";
import { Paginacion } from "./global/Paginacion"
import { Listar } from "../functions/F_fetch";
import { RenderizarUsuarios } from "./renderizado/R_usuario";

export function Usuarios() {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false)

    useEffect( () => {
        async function fetchData() {
            const res = await Listar('usuarios')

            //solo se mostrarán los usuarios clientes
            const documentos = res.filter(r => r.rol != 'admin')
            setResultado(documentos)
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
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-t-4 border-beige-800 rounded-full animate-spin"></div>
                </div>
            </>
        ) : (
            <>
                <h1 className="text-center my-14 text-4xl">Clientes Registrados</h1>
                <Paginacion documentos={resultado} Renderizado={RenderizarUsuarios} limite={10} setResultado={setResultado} />
            </>
        )}
    </>)
}