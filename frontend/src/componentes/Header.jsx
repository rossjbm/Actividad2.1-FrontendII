import Logo from "../assets/logoMientras.jpeg"
import { IoMenu } from "react-icons/io5";
import { B_iniciar } from "./botones/B_iniciar";
import { B_registrar } from "./botones/B_registrar";



export function Header({sesion}){

    return (<>
        <header>
            <img src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/Logo.png?raw=true" alt="Logo ElectroDom" className=" h-20 rounded-3xl "/>

            <div>
                {sesion===0 ? 
                    <>
                        <div>
                            <B_iniciar/>
                            <B_registrar/>
                        </div>
                    </>
                    : <>
                        <button onClick={() => {}}><IoMenu/></button>
                    </>
                }
            </div>
        </header>
    </>)
}