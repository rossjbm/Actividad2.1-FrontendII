import { Listar } from "./F_fetch"

export async function DetallesProducto(id, setDetallePMostrar, setDetalleP) {
    const documentos = await Listar('productos')
    const producto = documentos.filter(d => d._id === id)
    setDetalleP(producto)
    setDetallePMostrar(true)
}