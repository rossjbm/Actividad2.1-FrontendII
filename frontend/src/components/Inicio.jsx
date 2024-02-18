import { useState, useEffect } from "react"
import { Busqueda } from "./Busqueda"
import { Loader } from "./global/Loader"
import { Paginacion } from "./global/Paginacion"
import { RenderizarProductos } from "./renderizado/R_producto"
import { RenderizarDetalles } from "./renderizado/R_detalle"
import { MyVerticallyCenteredModal } from "./global/MensajeAlert";

export function Inicio({sesion, setSesion, inicioMostrar}) {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false)

    // estallos para mostrar detalles
    const [detallePMostrar, setDetallePMostrar] = useState(false)
    const [detalleP, setDetalleP] = useState()

    //modal
    const [error, setError] = useState("");
    const [modalShow, setModalShow] = useState(false);;
    const handleHide = () => {
        setModalShow(false);
        if (!error.noRedirecting) {
            setSesion(0);
        }
        setError('');
    };

    useEffect( () => {
        if (resultado === undefined) {
            setCargar(true)
        }
    }, [resultado]);

    return(<>
        {/* llamamos a busqueda */}
        <Busqueda resultado={resultado} setResultado={setResultado} setSesion={setSesion} cargar={cargar} setCargar={setCargar} sesion={sesion}/>
        
        {/* loader activo */}
        {cargar ? (
            <>
                <Loader></Loader>
            </>
        ) : (
            <>
                {/* loader desactivo */}
                {/* A paginación enviamos los valores necesarios para cualquier funcion que la requiera */}
                <Paginacion documentos={resultado} setError={setError} setModalShow={setModalShow} Renderizado={RenderizarProductos} limite={9} sesion={sesion} setDetallePMostrar={setDetallePMostrar} setDetalleP={setDetalleP} inicioMostrar={inicioMostrar} setResultado={setResultado}/>
                <RenderizarDetalles detallePMostrar={detallePMostrar} detalleP={detalleP} setDetallePMostrar={setDetallePMostrar}/>
            </>
        )}
        
        {/* mensaje de alerta */}
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={handleHide}
        error={error.error? error.error : error}
        />
    </>)
}