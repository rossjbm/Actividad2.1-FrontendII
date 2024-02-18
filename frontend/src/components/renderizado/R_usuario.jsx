import { Eliminar } from "../crud/Eliminar";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";

export function RenderizarUsuarios({ documentosPaginados , documentos, setResultado}){
    
    return (<div className="py-4 px-2 grid grid-cols-1 h-full w-full place-content-center place-items-center gap-16 sm:grid-cols-2">
        {documentosPaginados.map((usuario, i) => (
            <section key={i} className='border-4 border-orange-300 flex flex-col justify-center w-11/12 p-4 rounded-3xl gap-5'>
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <FaUserLarge className="w-full h-full text-4xl"/>
                    </div>
                    <h3 className="text-3xl">{usuario.user}</h3>
                    
                </div>
                <div className="flex justify-around items-center gap-3">
                    <div className="">
                        <p className="text-xl">Nombre: {usuario.nombre} </p>
                        <p className="text-xl">Apellido: {usuario.apellido} </p>
                        <p className="text-xl">Correo: {usuario.correo} </p>
                        {usuario.tlf? <p>Teléfono: {usuario.tlf} </p>: <p className="text-xl">Teléfono: Ninguno registrado</p>}
                    </div>
                </div>
                <div className="flex justify-around w-full gap-3">
                    <button onClick={() => {console.log('editar')}} className="bg-botones-100 w-full h-12 flex justify-center items-center"><FaUserEdit className="text-4xl "/></button>
                    <Eliminar id={usuario._id} setResultado={setResultado} documentos={documentos} url="usuarios" />
                </div>
            </section>
        ))}
    </div>)
    
}