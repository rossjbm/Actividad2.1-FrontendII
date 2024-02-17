import { useState, useEffect } from "react";
import { AlertaConfirmar } from "../global/AlertaEliminar";
import { FaUserSlash } from "react-icons/fa";


export function Eliminar(props){
    const [eliminar, setEliminar] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false) ;
    const handleShow = () => setShow(true);
    const handleOnHide = () => {
        setEliminar(true);
        handleClose();
    };

    useEffect( () => {
        if (eliminar) {
            servidor(props.id)
        }
    }, [eliminar]);

     function servidor(id) {
        console.log('voy a eliminar')
    }
    console.log(show)

    return(<>
        <button onClick={handleShow} className="bg-botones-200 w-full h-12 flex justify-center items-center"><FaUserSlash className="text-4xl "/></button> 
        <AlertaConfirmar handleClose={handleClose} handleShow={handleShow} handleOnHide={handleOnHide} show={show} />
    </>)

}