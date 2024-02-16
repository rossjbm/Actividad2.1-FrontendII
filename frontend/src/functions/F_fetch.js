
export async function EnvioRegistro({registro}) {
    return fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(registro)
    })
    .then(response => response.json())
    .then(response => {
        if (response.alerta) {
            console.log(response.alerta)
        }
        if (response.exito) {
            console.log(response.exito)
        }
    })
    .catch ((error) => console.log("Error:", error)) 
}

export async function ListarProductos() {
    return fetch('http://localhost:3000/productos', {
        method: 'GET',
        headers: {'Content-Type': 'application/json',}
    })
    .then(response => response.json())
    .then(response => {
        if (response.alerta) {
            console.log(response.alerta)
        }
        if (response.exito) {
            console.log(response.exito)
        }
        return response;
    })
    .catch ((error) => console.log("Error:", error)) 
}
