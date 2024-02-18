import { useState } from "react";
import { FormEditarU } from "../formularios/FormEditarU";
import { FaUserEdit } from "react-icons/fa";
import { Editar } from "../../functions/F_fetch";
import { AlertaError } from "../global/ErrorAlerta";
import { AlertaExito } from "../global/ExitoAlerta";


export function EditarPerfil({resultado, setResultado, perfilMostrar}){
    const [mensaje, setMensaje] = useState('')
    const [showMensaje, setShowMensaje] = useState(false);
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false);

    const [editarMostrar, setEditarMostrar] = useState(0)
    const [editable, setEditable] = useState({
        _id:"",
        nombre: "",
        apellido:"",
        user: "",
        correo: "",
        tlf: "",
        direccion: "",
        actual_p:"",
        nueva_p:"",
        confirmar_p:""
    });

    async function Obtener(e) {
        e.preventDefault();
        setEditarMostrar(true)
        return setEditable({
            _id: resultado?._id || "",
            nombre: resultado?.nombre || "",
            apellido: resultado?.apellido || "",
            user: resultado?.user || "",
            correo: resultado?.correo || "",
            tlf: resultado?.tlf || "",
            direccion: resultado?.direccion || "",
            actual_p: "",
            nueva_p:"",
            confirmar_p:""
        })
    }

    const handleChange = (e) => {
        setEditable({ ...editable, [e.target.name]: e.target.value})
    };

    const enviar = async (e) => {
        e.preventDefault();
        console.log(editable);
        
        try {
            const editado = await Editar(editable, 'usuarios')
            setMensaje(editado)
            setShowMensaje(true)
            //actualizamos estado
            setResultado(editable)
            setEditarMostrar(false)
            
        } catch (error) {
            console.log('error', error)
            setError(error)
            setShowError(true)
        }
    };

    return (<>
        <button onClick={(e) => {Obtener(e)}} className="bg-orange-300 w-36 rounded p-3 m-5 text-2xl">E D I T A R</button>

        {editarMostrar ? <>         
            <FormEditarU setEditarMostrar={setEditarMostrar} editable={editable} handleChange={handleChange} enviar={enviar} perfilMostrar={perfilMostrar}/>
        </> : null}
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
        <AlertaError error={error} setShowError={setShowError} showError={showError} />

    </>)
}