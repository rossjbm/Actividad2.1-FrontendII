import { useState, useEffect } from "react"
import { Busqueda } from "./Busqueda"
import { Paginacion } from "./global/Paginacion"
import { RenderizarProductos } from "./renderizado/R_producto"
import { RenderizarDetalles } from "./renderizado/R_detalle"

export function Inicio({sesion, setSesion}) {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false)
    const [detallePMostrar, setDetallePMostrar] = useState(false)
    const [detalleP, setDetalleP] = useState()

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
                <Paginacion documentos={resultado} Renderizado={RenderizarProductos} limite={8} sesion={sesion} setDetallePMostrar={setDetallePMostrar} setDetalleP={setDetalleP}/>
                <RenderizarDetalles detallePMostrar={detallePMostrar} detalleP={detalleP} setDetallePMostrar={setDetallePMostrar}/>
                {/* <RenderizarProductos resultado={resultado} sesion={sesion} setDetallePMostrar={setDetallePMostrar} setDetalleP={setDetalleP}/> */}
            </>
        )}
    </>)
}