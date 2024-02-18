export function cerrar(setSesion) {
    localStorage.removeItem('token')
    setSesion(0)
}