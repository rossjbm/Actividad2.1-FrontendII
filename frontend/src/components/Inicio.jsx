import { useState } from "react"
import { Busqueda } from "./Busqueda"
import { RenderizarProductos } from "./renderizado/R_producto"

export function Inicio() {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false)

    return(<>
        <Busqueda resultado={resultado} setResultado={setResultado} cargar={cargar} setCargar={setCargar}/>
        {cargar ? (
            <>
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-t-4 border-beige-800 rounded-full animate-spin"></div>
                </div>
            </>
        ) : (
            <>
                <RenderizarProductos resultado={resultado}/>
            </>
        )}
    </>)
}