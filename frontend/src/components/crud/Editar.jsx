import { useState } from "react";
import { FormEditar } from "../formularios/FormEditar";
import { Listar } from "../../functions/F_fetch";
import { Editar } from "../../functions/F_fetch";
import { AlertaError } from "../global/ErrorAlerta";
import { AlertaExito } from "../global/ExitoAlerta";


export function EditarProductos({id, setResultado}){
    const [mensaje, setMensaje] = useState('')
    const [showMensaje, setShowMensaje] = useState(false);
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false);

    const [editarMostrar, setEditarMostrar] = useState(0)
    const [editable, setEditable] = useState({
        _id:"",
        nombre: "",
        descripcion:"",
        categoria: "",
        cantidad: 0,
        precio: "",
        marca: "",
        img: ""
    });

    async function Obtener(e, id) {
        e.preventDefault();
        setEditarMostrar(true)
        try {
            var documento = await Listar('productos')
            const editar = documento.find(d => d._id === id)
            console.log(editar)
            return setEditable(editar)
        } catch (error) {
            console.log("Error:", error)
            throw error
        }
    }

    const handleChange = (e) => {
        setEditable({ ...editable, [e.target.name]: e.target.value})
    };

    const enviar = async (e) => {
        e.preventDefault();
        console.log(editable);
        
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
                    const editado = await Editar(editable, 'productos/edit')
                    setMensaje(editado)
                    console.log(editado);
                    setShowMensaje(true)

                    //actualizamos estado
                    try {
                        var documentos = await Listar('productos')
                        setResultado(documentos)
                    } catch (error) {
                        console.log('error', error)
                        setError(error)
                        setShowError(true)
                    }
                    setEditarMostrar(false)
                } catch (error) {
                    console.log('error', error)
                    setError(error)
                    setShowError(true)
                }
            };
            URL.src = editable.img;
            
        } catch (error) {
            console.log('error', error)
            setError(error)
            setShowError(true)
        }
    };

    return (<>

        <button onClick={(e) => {Obtener(e, id)}} className='w-full h-14 bg-orange-300 text-white text-2xl sm:text-xl rounded sm:h-10'>E D I T A R</button>

        {editarMostrar ? <>         
            <FormEditar setEditarMostrar={setEditarMostrar} editable={editable} handleChange={handleChange} enviar={enviar} />
        </> : null}
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
        <AlertaError error={error} setShowError={setShowError} showError={showError} />

    </>)
}