import { B_favorito } from "../botones/B_favorito"
import { DetallesProducto } from "../../functions/F_detallesp"
import { ComprarButton } from "../crud/Comprar"
import { Eliminar } from "../crud/Eliminar"
import { EditarProductos } from "../crud/Editar"

export function RenderizarProductos({documentosPaginados, setError, setModalShow, sesion, setDetallePMostrar, setDetalleP, inicioMostrar, documentos, setResultado}){

    const imgDefault = 'https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/Default.jpg?raw=true'
    
    return (<div className="py-5 px-3 grid grid-cols-1 h-full w-full place-content-center place-items-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {documentosPaginados.map((producto, i) => (
            <section key={i} className='border-4 border-grey-100 flex flex-col justify-center w-11/12 p-4 rounded-tr-3xl gap-4'>
                <div className='flex justify-end'>
                    {sesion===1?
                        <B_favorito setModalShow={setModalShow} setError={setError} id={producto._id} />
                    : <Eliminar id={producto._id} url="productos" inicioMostrar={inicioMostrar} setResultado={setResultado} documentos={documentos} />}
                </div>
                <div className='flex justify-center' onClick={() => {DetallesProducto(producto._id, setDetallePMostrar, setDetalleP)}}>
                    <img src={producto.img} atl={producto.nombre} onError={(e)=>{e.target.onerror = null; e.target.src=imgDefault}} className='w-full h-auto border-2 border-grey-100 rounded-3xl'/>
                </div>
                <div className='text-center flex flex-col items-center justify-center gap-3'>
                    <h3 className='text-3xl sm:text-2xl' onClick={() => {DetallesProducto(producto._id, setDetallePMostrar, setDetalleP)}}>{producto.nombre}</h3>
                    <p className='m-1 p-2 rounded-3xl bg-orange-200 w-auto text-xl sm:text-base'>{producto.categoria}</p>
                    <p className='text-base'>{producto.descripcion}</p>
                </div>
                <div className='flex justify-around items-center text-center'>
                    <p className='text-3xl border-r w-full'>${producto.precio}</p>
                    <p className='text-3xl border-l w-full'>{producto.cantidad} uds</p>
                </div>
                <div className='flex justify-center mt-3'>
                    {sesion===1?
                        <ComprarButton setResultado={setResultado} i={i} documentos={documentos} setError={setError} setModalShow={setModalShow} producto_id={producto._id} className='w-full h-14 bg-orange-300 hover:bg-orange-500 hover:scale-102 duration-200 border-solid border-2 rounded-md border-black-300 text-white text-2xl'>C O M P R A R</ComprarButton>
                    :   <EditarProductos id={producto._id} setResultado={setResultado}/>
                }
                </div>
            </section>
        ))}
    </div>)
    
}