
export async function EnvioRegistro({registro}) {
    fetch('http://localhost:3000/registrar', {
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
    return
}
