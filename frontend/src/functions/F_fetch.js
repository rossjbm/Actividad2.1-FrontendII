import { revisarJWT } from "./F_revisarJWT"

export async function Envio(registro, url) {
    const token = await revisarJWT()
    return fetch(`http://localhost:3000/${url}`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token  
                },
        body: JSON.stringify(registro)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.exito) {
        return response.exito
        }else if (response.error) {
            throw (response.error)
        }else{
            throw ('Servidor no responde correctamente')
        }
        
    })
    .catch ((error) => {
        console.log("Error:", error)
        throw error
    }) 
}
export async function EnvioRegistro(registro, url) {
    return fetch(`http://localhost:3000/${url}`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
                },
        body: JSON.stringify(registro)
    })
    .then(response => response.json())
    .then(response => {
        if (response.exito) {
            return response.exito
        }
        if (response.error) {
            throw response.error
        }
    
    })
    .catch ((error) => {
        console.log("Error:", error)
        throw error
    }) 
}
export async function Listar(url) {
    const token = await revisarJWT()
    return fetch(`http://localhost:3000/${url}`, {
        method: 'GET',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                }
    })
    .then(response => response.json())
    .then(response => {
        if (response.alerta) {
            console.log(response.alerta)
        }
        if (response.exito) {
            console.log(response.exito)
        }
        if (response.error) {
            console.log('error', response.error);
            throw response.error
        }else{
            return response;
        } 
    })
    .catch ((error) => {
        throw ("Error:", error)
    }) 
}

export async function Borrar(url, id) {
    const token = await revisarJWT()
    return fetch(`http://localhost:3000/${url}/delete`, {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                },
        body: JSON.stringify({id:id})
    })
    .then(response => response.json())
    .then(response => {
        if (response.exito) {
            return response.exito
        }
        if (response.error) {
            throw response.error
        }
    })
    .catch ((error) => {
        console.log("Error:", error)
        throw error
    }) 
}

export async function Editar(documento, url) {
    const token = await revisarJWT()
    return fetch(`http://localhost:3000/${url}/edit`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token  
                },
        body: JSON.stringify(documento)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.exito) {
            return response.exito
        }
        if (response.error) {
            throw response.error
        }
    })
    .catch ((error) => {
        console.log("Error:", error)
        throw error
    }) 
}

export async function PerfilBuscar() {
    var token = await revisarJWT() 
    return fetch(`http://localhost:3000/usuarios/miPerfil`, {
        method: 'GET',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                }
    })
    .then(response => response.json())
    .then(response => {
        if (response.alerta) {
            throw response.alerta
        }
        if (response.exito) {
            console.log(response.exito)
            return response;
        }
        if (response.error) {
            console.log('error', response.error);
            throw response.error
        }else{
            throw response;
        } 
    })
    .catch ((error) => {
        throw ("Error:", error)
    }) 
}