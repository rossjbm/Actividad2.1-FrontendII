import { B_salir } from "./botones/B_salir"
import {S_cliente , S_admin} from ".././functions/F_secciones"


export function Menu({menu, setMenu, sesion, setFavoritosMostrar, setInicioMostrar, setPerfilMostrar}) {
    return (<>
        {/* si menu esta abierto */}
        {menu ? 
            <button onClick={() => {setMenu(false); console.log("salir")}} className="flex justify-end w-full fixed top-0 right-0 z-10 h-full">
                <nav className="w-1/2 h-full p-2 bg-slate-500 ">

                    {/* salir del menu */}
                    <div className="mb-4 flex">
                        <B_salir estado={setMenu}/>
                    </div>

                    {sesion===1 ? 

                    // menu de navegacion cuando esta el cliente
                    <div className="flex row justify-center gap-10 w-full items-center p-0 m-0" >
                        <button className="text-xl" onClick={() => {S_cliente(1, 0, 0, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}}>Inicio</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 1, 0, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}} >Favoritos</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 0, 1, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}} >Perfil</button>
                        <button className="text-xl" onClick={() => {}}>Cerrar Sesión</button>
                    </div>

                    : sesion===2 ?

                    // menu de navegacuion cuando esta el administrador
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