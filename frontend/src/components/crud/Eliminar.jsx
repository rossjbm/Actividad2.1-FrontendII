import { useState, useEffect } from "react";
import { AlertaConfirmar } from "../global/AlertaEliminar";
import { AlertaExito } from "../global/ExitoAlerta";
import { Borrar } from "../../functions/F_fetch";
import { FaUserSlash } from "react-icons/fa";


export function Eliminar({id, documentos, setResultado}){
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
            const mensaje = await Borrar('usuarios', id)
            const nuevosDocumentos = documentos.filter(d => d._id != id)
            setResultado(nuevosDocumentos)
            setMensaje(mensaje)
            setShowMensaje(true)
        }catch (error){
            console.log("Error:", error)
        }
    }

    return(<>
        <button onClick={handleShow} className="bg-botones-200 w-full h-12 flex justify-center items-center"><FaUserSlash className="text-4xl "/></button> 
        <AlertaConfirmar handleClose={handleClose} handleShow={handleShow} handleOnHide={handleOnHide} show={show} />
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
    </>)

}