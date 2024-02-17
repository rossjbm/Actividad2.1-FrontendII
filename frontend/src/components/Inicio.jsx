import { useState, useEffect } from "react"
import { Busqueda } from "./Busqueda"
import { RenderizarProductos } from "./renderizado/R_producto"

export function Inicio({sesion, setSesion}) {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false)

    useEffect( () => {
        if (resultado === undefined) {
            setCargar(true)
        }
    }, [resultado]);

    return(<>
        <Busqueda resultado={resultado} setResultado={setResultado} setSesion={setSesion} cargar={cargar} setCargar={setCargar}/>
        {cargar ? (
            <>
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-t-4 border-beige-800 rounded-full animate-spin"></div>
                </div>
            </>
        ) : (
            <>
                <RenderizarProductos resultado={resultado} sesion={sesion}/>
            </>
        )}
    </>)
}