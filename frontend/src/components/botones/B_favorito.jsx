import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";


export function B_favorito({}) {
    return (<>
        <button onClick={() => {console.log("es favorito")}} ><FaRegHeart className="text-4xl text-orange-300 m-0 p-0"/></button>
    </>)
}