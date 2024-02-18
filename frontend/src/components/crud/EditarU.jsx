import { useState } from "react";
import { FormEditarU } from "../formularios/FormEditarU";
import { FaUserEdit } from "react-icons/fa";
import { Listar } from "../../functions/F_fetch";
import { Editar } from "../../functions/F_fetch";
import { AlertaError } from "../global/ErrorAlerta";
import { AlertaExito } from "../global/ExitoAlerta";


export function EditarUsuarios({id, setResultado}){
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
        direccion: ""
    });

    async function Obtener(e, id) {
        e.preventDefault();
        setEditarMostrar(true)
        try {
            var documento = await Listar('usuarios')
            const editar = documento.find(d => d._id === id)
            console.log(editar)
            return setEditable({
                _id: editar?._id || "",
                nombre: editar?.nombre || "",
                apellido: editar?.apellido || "",
                user: editar?.user || "",
                correo: editar?.correo || "",
                tlf: editar?.tlf || "",
                direccion: editar?.direccion || ""
            })
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
            const editado = await Editar(editable, 'usuarios')
            setMensaje(editado)
            console.log("editando",editado);
            setShowMensaje(true)

            //actualizamos estado
            try {
                var documentos = await Listar('usuarios')
                const d = documentos.filter(r => r.rol != 'admin')
                setResultado(d)
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

    return (<>
        <button onClick={(e) => {Obtener(e, id)}} className="bg-botones-100 w-full h-12 flex justify-center items-center"><FaUserEdit className="text-4xl "/></button>

        {editarMostrar ? <>         
            <FormEditarU setEditarMostrar={setEditarMostrar} editable={editable} handleChange={handleChange} enviar={enviar} />
        </> : null}
        <AlertaExito mensaje={mensaje} setShowMensaje={setShowMensaje} showMensaje={showMensaje} />
        <AlertaError error={error} setShowError={setShowError} showError={showError} />

    </>)
}