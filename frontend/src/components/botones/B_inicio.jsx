import Button from 'react-bootstrap/Button';

export function B_inicio({formInicio, setFormInicio}){
    return (<>
        <div className='flex gap-2'>
            {/* con formInicio representamos cuando esta presente el formulario de incio de sesion o de registro */}
            
            <button className='bg-orange-200 text-black-300 p-2 rounded w-24 h-8 text-sm' size="sm" onClick={() => {!formInicio ? setFormInicio(true) : setFormInicio(true)}} >Iniciar Sesión</button>

            <button className='bg-orange-300 text-black-300 p-2 rounded w-24 h-8 text-sm' size="sm" onClick={() => {setFormInicio(false)}}>Regístrate</button>
        </div>            
    </>)
}