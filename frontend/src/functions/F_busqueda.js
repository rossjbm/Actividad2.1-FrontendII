

export function Buscar (valor, categoria, documentos) {
    var respuesta = documentos.filter(nombre_descripF).filter(categoriaF)

    function nombre_descripF(document){
        return document.nombre.toLowerCase().startsWith(valor.toLowerCase()) || document.descripcion.toLowerCase().startsWith(valor.toLowerCase())
    }
    function categoriaF(document){
        if (categoria.length > 0){
            return categoria.includes(document.categoria);
        }
        return true;
    }

    return respuesta
}