import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { revisarJWT } from "../../functions/F_revisarJWT";
import { PerfilBuscar } from "../../functions/F_fetch";


export function B_favorito({setModalShow, setError, id}) {
    const [favorito, setFavorito]= useState('')
    // useEffect(()=>{

    async function opacarBotones() {
        try {
            const datoo = await PerfilBuscar()
    
            const indice = datoo.exito.favoritos.findIndex(e => e == id);
            console.log(indice);
            if (indice !== -1) {
                // Si el producto está en el array, se opaca el botón
                setFavorito(true)
              } else {
                // Si el producto no está en el array, se aclara el botón
                setFavorito(false)
              }
        } catch (error) {
            
            setError({'error':String(error),'noRedirecting':true})
            setModalShow(true)
        }
    }

    useEffect(()=>{
        opacarBotones()
    },[])
    // },[favorito],[])


    async function cambiar() {
        console.log("es favorito")
        try {
            const dato = await favoritoAgregar(id);
            console.log(dato);
            setFavorito(!favorito)
        } catch (error) {
            setError(error)
            setModalShow(true)
        }
    }
    return (<>
        <button onClick={(e) => {e.preventDefault(),cambiar()}} > {favorito ? <FaRegHeart  className='text-4xl m-0 p-0 text-orange-300'/> : <FaHeart  className='text-4xl m-0 p-0 text-orange-300'/> }</button>
    </>)
}
export async function favoritoAgregar(id) {
    var token = await revisarJWT() 
    return fetch(`http://localhost:3000/productos/favorito`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                },
        body: JSON.stringify({id:id})
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