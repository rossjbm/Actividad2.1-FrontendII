import { IoMenuOutline } from "react-icons/io5";


export function B_menu({setMenu}) {
    return (<>
        <button onClick={() => {setMenu(true); console.log("menuu")}} ><IoMenuOutline className="text-4xl m-0 p-0"/></button>
    </>)
}