import { useState, useEffect } from "react"
import { Busqueda } from "./Busqueda"
import { Loader } from "./global/Loader"
import { Paginacion } from "./global/Paginacion"
import { RenderizarProductos } from "./renderizado/R_producto"
import { RenderizarDetalles } from "./renderizado/R_detalle"
import { MyVerticallyCenteredModal } from "./global/MensajeAlert";
import { Listar, PerfilBuscar } from "../functions/F_fetch"

export function Favoritos({sesion, setSesion, inicioMostrar}) {
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

    
    useEffect(()=>{
        datos()
    },[])
    async function datos() {
        console.log('l');
        try {
            var documentos = await Listar('productos')
            var favorito = await PerfilBuscar()
            favorito= favorito.exito.favoritos
            documentos = await documentos.filter(e => !favorito.includes(e._id));
            setResultado(documentos)
        } catch (error) {
            setError(error)
            setModalShow(true)
        }
    }

    return(<>
        <Paginacion documentos={resultado} setError={setError} setModalShow={setModalShow} Renderizado={RenderizarProductos} limite={9} sesion={sesion} setDetallePMostrar={setDetallePMostrar} setDetalleP={setDetalleP} inicioMostrar={inicioMostrar} setResultado={setResultado}/>
        <RenderizarDetalles detallePMostrar={detallePMostrar} detalleP={detalleP} setDetallePMostrar={setDetallePMostrar}/>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={handleHide}
        error={error}
        />
    </>)
}