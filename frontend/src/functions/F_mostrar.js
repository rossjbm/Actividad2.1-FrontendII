export function mostrarSeccion(e, estado, setEstado) {
    e.preventDefault();
    !estado ? setEstado(true) : setEstado(false)
}