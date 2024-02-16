import { B_salir } from "./botones/B_salir"
import {S_cliente , S_admin} from ".././functions/F_secciones"

//estilos
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Menu({menu, setMenu, sesion, setFavoritosSection, setInicioSection, setPerfilSection}) {
    return (<>
        {menu ? 
            <button onClick={() => {setMenu(false); console.log("salir")}} className="flex justify-end w-full fixed top-0 right-0 z-10 h-full">
                <nav className="w-1/2 h-full p-2 bg-slate-500 ">
                    <div className="mb-4 flex">
                        <B_salir estado={setMenu}/>
                    </div>
                    {sesion===1 ? 
                    <div className="flex row justify-center gap-10 w-full items-center p-0 m-0" >
                        <button className="text-xl" onClick={() => {S_cliente(1, 0, 0, {setFavoritosSection}, {setInicioSection}, {setPerfilSection})}}>Inicio</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 1, 0, {setFavoritosSection}, {setInicioSection}, {setPerfilSection})}} >Favoritos</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 0, 1, {setFavoritosSection}, {setInicioSection}, {setPerfilSection})}} >Perfil</button>
                        <button className="text-xl" onClick={() => {}}>Cerrar Sesión</button>
                    </div>
                    : sesion===2 ?
                    <div className="flex row justify-center gap-10 w-full items-center p-0 m-0">
                        <button className="text-xl">Inicio</button>
                        <button className="text-xl">Usuarios</button>
                        <button className="text-xl">Inventario</button>
                        <button className="text-xl">Perfil</button>
                        <button className="text-xl">Cerrar Sesión</button>
                    </div>
                    : null }
                </nav>
            </button >
        : <></> }
            
    </>)
}