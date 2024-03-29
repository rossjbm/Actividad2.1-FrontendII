import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export function Paginacion({ documentos, setError, setModalShow, Renderizado, limite, sesion, setDetallePMostrar, setDetalleP , setResultado, inicioMostrar}) {
    const [paginaActual, setPaginaActual] = useState(1);
    var maxPagina;

    if (documentos && documentos.length === 0) { //evitamos errores
        return(<p className="text-center text-2xl text-black-300">No Se Hay Resultados</p>) 
    } else if (documentos) {
        maxPagina = Math.ceil(documentos.length / limite);
        
        // funcion para cambiar a la siguiente pagina
        function cambiarPagina(nuevaPagina) {
            setPaginaActual(Math.max(1, Math.min(nuevaPagina, maxPagina)));
        }

        // anterios
        function anteriorPagina() {
            setPaginaActual((valor) => Math.max(valor - 1, 1));
        }

        const documentosPaginados = documentos.slice((paginaActual - 1) * limite, paginaActual * limite);

        return (
            <div>
                {/* llamamos a determinado rendirizado */}
                <Renderizado setError={setError} setModalShow={setModalShow} documentosPaginados={documentosPaginados} sesion={sesion} setDetallePMostrar={setDetallePMostrar} setDetalleP={setDetalleP} setResultado={setResultado} documentos={documentos} inicioMostrar={inicioMostrar}/>

                {/* paginación */}
                <div className="flex justify-center gap-5 my-5">
                    <button onClick={anteriorPagina} value={paginaActual - 1} className={paginaActual=== 1 ? 'text-3xl bg-grey-100 p-3 rounded-full' : 'text-3xl bg-orange-200 p-3 rounded-full'}><FaArrowLeftLong/></button>
                    <button onClick={() => cambiarPagina(paginaActual + 1)}className={paginaActual=== maxPagina ? 'text-3xl bg-grey-100 p-3 rounded-full' : 'text-3xl bg-orange-200 p-3 rounded-full'} ><FaArrowRightLong/></button>
                </div>
            </div>
        );
    }
}