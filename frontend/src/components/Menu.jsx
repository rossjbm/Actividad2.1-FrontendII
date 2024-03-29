import { B_salir } from "./botones/Botones"
import {S_cliente , S_admin} from ".././functions/F_secciones"
import {cerrar} from '../functions/F_cerrar'

export function Menu({menu, setMenu, sesion, setSesion, setFavoritosMostrar, setInicioMostrar, setPerfilMostrar, setUsuariosMostrar, setAgregarMostrar}) {
    return (<>
        {/* si menu esta abierto */}
        {menu ? 
            <div onClick={() => {setMenu(false); console.log("salir")}} className="flex justify-end w-full fixed top-0 right-0 z-10 h-full bg-black-100">
                <nav className="w-1/2 h-full p-2 bg-orange-200 md:w-2/5 lg:w-2/6">

                    {/* salir del menu */}
                    <div className="mb-4 flex">
                        <B_salir estado={setMenu}/>
                    </div>

                    {sesion===1 ? 

                    // menu de navegacion cuando esta el cliente
                    <div className="flex flex-col justify-center gap-10 w-full items-center p-0 m-0" >
                        <button className="text-xl" onClick={() => {S_cliente(1, 0, 0, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}}>Inicio</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 1, 0, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}} >Favoritos</button>
                        <button className="text-xl" onClick={() => {S_cliente(0, 0, 1, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar})}} >Perfil</button>
                        <button className="text-xl" onClick={(e) => {e.preventDefault(),cerrar(setSesion)}}>Cerrar Sesión</button>
                    </div>

                    : sesion===2 ?

                    // menu de navegacuion cuando esta el administrador
                    <div className="flex flex-col justify-center gap-10 w-full items-center p-0 m-0">
                        <button className="text-xl" onClick={() => {S_admin(1, 0, 0, 0, {setUsuariosMostrar}, {setInicioMostrar}, {setPerfilMostrar}, {setAgregarMostrar})}}>Inicio</button>
                        <button className="text-xl" onClick={() => {S_admin(0, 1, 0, 0, {setUsuariosMostrar}, {setInicioMostrar}, {setPerfilMostrar}, {setAgregarMostrar})}}>Usuarios</button>
                        <button className="text-xl" onClick={() => {S_admin(0, 0, 1, 0, {setUsuariosMostrar}, {setInicioMostrar}, {setPerfilMostrar}, {setAgregarMostrar})}}>Agregar Mercancía</button>
                        <button className="text-xl" onClick={() => {S_admin(0, 0, 0, 1, {setUsuariosMostrar}, {setInicioMostrar}, {setPerfilMostrar}, {setAgregarMostrar})}}>Perfil</button>
                        <button className="text-xl" onClick={(e) => {e.preventDefault(),cerrar(setSesion)}}>Cerrar Sesión</button>
                    </div>

                    : null }
                </nav>
            </div >
        : <></> }
            
    </>)
}