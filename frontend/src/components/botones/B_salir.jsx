
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

// este boton de salir recibe una variable estado que es la funcion con la que se puede actualizar el estado, con el fin de reutilizar
export function B_salir({estado}) {
    return (<>
        <button onClick={() => {estado(false); console.log("salir")}}><IoCloseOutline className="text-4xl"/></button>
    </>)
}