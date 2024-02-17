import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";


// este boton de salir recibe una variable estado que es la funcion con la que se puede actualizar el estado, con el fin de reutilizar
export function B_salir({estado}) {
    return (<>
        <button onClick={() => {estado(false)}}><IoCloseOutline className="text-4xl"/></button>
    </>)
}

// export function B_favorito({}) {
//     return (<>
//         <button onClick={() => {console.log("es favorito")}} ><FaRegHeart className="text-4xl text-orange-300 m-0 p-0"/></button>
//     </>)
// }

export function B_menu({estado}) {
    return (<>
        <button onClick={() => {estado(true)}} ><IoMenuOutline className="text-4xl m-0 p-0"/></button>
    </>)
}