import { useState } from "react"
import { revisarJWT } from "../../functions/F_revisarJWT";


export function Perfil() {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false) //estado loader
    try {
        const perfil =PerfilBuscar()
        console.log(perfil);
    } catch (error) {
        
    }
    return (<>

    </>)

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