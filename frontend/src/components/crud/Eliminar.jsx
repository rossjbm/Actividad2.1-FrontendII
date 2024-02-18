import { useState, useEffect } from "react";
import { AlertaConfirmar } from "../global/AlertaEliminar";
import { AlertaExito } from "../global/ExitoAlerta";
import { Borrar } from "../../functions/F_fetch";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";


export function Eliminar({id, documentos, setResultado, url, inicioMostrar}){
    const [eliminar, setEliminar] = useState(false)
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('')
    const [showMensaje, setShowMensaje] = useState(false);

    const handleClose = () => setShow(false) ;
    const handleShow = () => setShow(true);
    const handleOnHide = () => {
        setEliminar(true);
        handleClose();
    };

    useEffect( () => {
        async function fetchData() {
            if (eliminar) {
                await servidor(id)
            }
        }
        fetchData();
        setEliminar(false)
    }, [eliminar]);

    async function servidor(id) {
        console.log('voy a eliminar')
        try {
            const mensaje = await Borrar(url, id)
            console.log('paso token');
            const nuevosDocumentos = documentos.filter(d => d._id != id)
            setResultado(nuevosDocumentos)
            setMensaje(mensaje)
            setShowMensaje(true)
            console.log(showMensaje)
        }catch (error){
            console.log("Error:", error)
            throw error
        }
    }

    return(<>
        <button onClick={handleShow} className={inicioMostrar ?  " text-orange-300 hover:scale-110" : "bg-botones-200 w-full h-12 flex justify-center items-center"}>
            {inicioMostrar ? <FaRegTrashAlt className="text-4xl"/> : <FaUserSlash className="text-4xl "/>}
        </button> 
        <AlertaConfirmar handleClose={handleClose} handleShow={handleShow} handleOnHide={handleOnHide} show={show} />
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
    </>)

}