export function S_cliente(E1, E2, E3, {setFavoritosSection}, {setInicioSection}, {setPerfilSection}){
    setInicioSection(E1)
    setFavoritosSection(E2)
    setPerfilSection(E3)
    return
}

export function S_admin(E1, E2, E3, E4){
    setInicioSection(E1)
    setUsuariosSection(E2)
    setInventarioSection(E3)
    setPerfilSection(E4)
    return
}
