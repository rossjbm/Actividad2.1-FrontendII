// llamamos a esta función cuando seleccionamos una opcion del menu de navegacion, actualizamos con estado(E) 0 los que se van a ocultar, y con 1 los que se van a mostrar.

export function S_cliente(E1, E2, E3, {setFavoritosMostrar}, {setInicioMostrar}, {setPerfilMostrar}){
    setInicioMostrar(E1)
    setFavoritosMostrar(E2)
    setPerfilMostrar(E3)
    return
}

export function S_admin(E1, E2, E3, E4){
    setInicioMostrar(E1)
    setUsuariosMostrar(E2)
    setInventarioMostrar(E3)
    setPerfilMostrar(E4)
    return
}
