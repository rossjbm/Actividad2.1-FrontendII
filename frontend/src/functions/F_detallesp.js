import { ListarProductos } from "./F_fetch"

export async function DetallesProducto(id, setDetallePMostrar, setDetalleP) {
    console.log(id)
    const documentos = await ListarProductos()
    const producto = documentos.filter(d => d._id === id)
    console.log(producto)
    setDetalleP(producto)
    setDetallePMostrar(true)
}