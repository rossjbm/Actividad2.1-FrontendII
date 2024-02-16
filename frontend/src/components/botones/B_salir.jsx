
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";


export function B_salir({estado}) {
    return (<>
        <button onClick={() => {estado(false); console.log("salir")}}><IoCloseOutline className="text-4xl"/></button>
    </>)
}