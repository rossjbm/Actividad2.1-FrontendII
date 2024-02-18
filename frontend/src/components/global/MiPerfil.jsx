import { useState, useEffect } from "react"
import { PerfilBuscar } from "../../functions/F_fetch"
import { Loader } from "./Loader"
import { RenderizarPerfil } from "../renderizado/R_perfil"


export function Perfil({perfilMostrar}) {
    const [resultado, setResultado] = useState()
    const [cargar, setCargar] = useState(false) //estado loader
    
    useEffect(() => {
        async function fetchData() {
            try {
                const perfil = await PerfilBuscar()
                setResultado(perfil.exito)
                console.log('perfil',perfil)
                console.log(typeof(perfil))
                if (perfil === undefined) {
                    setCargar(true)
                }
                if (perfil && perfil.length ===0 || perfil) {
                    setCargar(false)
                }
            } catch (error) {
                console.log('Error', error)
                throw error
            }
        }
        fetchData()
    }, [])

    return (<>
            {cargar ? <Loader/> : <RenderizarPerfil resultado={resultado} setResultado={setResultado} perfilMostrar={perfilMostrar} />}
    </>)

}  
