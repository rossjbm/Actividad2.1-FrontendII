import { useState } from "react";
import { FormIniciar } from "./formularios/FormIniciar";
import { FormRegistro } from "./formularios/FormRegistro";
import {MyVerticallyCenteredModal} from "./global/MensajeAlert"

export function Landing({formInicio , setFormInicio, setSesion}) {

    // funcion para el modal de error inicio de sesion
    const handleHide = () => {
        setModalShow(false);
        setError('');
        setSesion(0);
    };
    // estados para manejo de error en el inici de sesion
    const [error, setError] = useState("");
    const [modalShow, setModalShow] = useState(false);

    return (<>
        <div className="bg-fondoLocal bg-cover bg-center h-52 w-full" >
            <div className="bg-black-100 h-full w-full flex flex-col justify-center items-center gap-4">
                <h3 className="text-white ">¡Bienvenido a ElectroDom!</h3>
                <p className="text-white ">La Mejor Tienda Online de Electrodomésticos</p>
            </div>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={handleHide}
        error={error}
        />
        {/* formularios de inicio de sesion y registro */}
        {formInicio ? 
            <FormIniciar setFormInicio={setFormInicio} setSesion={setSesion} setModalShow={setModalShow} setError={setError}/>
        : <FormRegistro setFormInicio={setFormInicio} setModalShow={setModalShow} setError={setError} /> }
    </>)
}