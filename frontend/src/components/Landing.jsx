import { FormIniciar } from "./formularios/FormIniciar";
import { FormRegistro } from "./formularios/FormRegistro";


export function Landing({formInicio , setFormInicio, setSesion}) {

    return (<>
        <div className="bg-fondoLocal bg-cover bg-center h-52 w-full" >
            <div className="bg-black-100 h-full w-full flex flex-col justify-center items-center gap-4">
                <h3 className="text-white ">¡Bienvenido a ElectroDom!</h3>
                <p className="text-white ">La Mejor Tienda Online de Electrodomésticos</p>
            </div>
        </div>
        {/* formularios de inicio de sesion y registro */}
        {formInicio ? 
            <FormIniciar setSesion={setSesion}/>
        : <FormRegistro/> }
    </>)
}