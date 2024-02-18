import { useState } from "react";
// estilos
import { Envio } from "../functions/F_fetch";
import { FormProductos } from "./formularios/FormProductos";
import { AlertaExito } from "./global/ExitoAlerta";
import { AlertaError } from "./global/ErrorAlerta";

const TodasCategorias = ["Nevera", "Lavadora", "Aire Acondicionado", "Microondas", "Licuadora", "Televisor", "Congelador"]


export function NuevoProducto() {
    const [mensaje, setMensaje] = useState('')
    const [showMensaje, setShowMensaje] = useState(false);
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false);
    const [nuevoP, setNuevoP] = useState({
        nombre: "",
        descripcion:"",
        categoria: "",
        cantidad: "",
        precio: "",
        marca: "",
        img: ""
    });

    const handleChange = (e) => {
        setNuevoP({ ...nuevoP, [e.target.name]: e.target.value})
    };
    const enviar = async (e) => {
        e.preventDefault();
        console.log(nuevoP);
        
        try {
            const URL = new Image();
            URL.onerror = function() {
                setError('La URL ingresada no es una imagen. Verifica e intentalo de nuevo');
                setShowError(true);
                return;
            };
            URL.onload = async function() {
                console.log('La URL es de una imagen');
                try {
                    const enviado = await Envio(nuevoP, 'productos/create')
                    setMensaje(enviado)
                    console.log(enviado);
                    setShowMensaje(true)
                } catch (error) {
                    console.log('error', error)
                    setError(error)
                    setShowError(true)
                }
            };
            URL.src = nuevoP.img;
            
        } catch (error) {
            console.log('error', error)
            setError(error)
            setShowError(true)
        }
        
    };

    return (<>
        <h1 className="text-center my-14 text-4xl">Amplía tu Inventario</h1>

        <FormProductos nuevoP={nuevoP} handleChange={handleChange} enviar={enviar} />
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
        <AlertaError error={error} setShowError={setShowError} showError={showError} />

    </>)
}