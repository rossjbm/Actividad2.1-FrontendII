import Button from 'react-bootstrap/Button';

export function B_inicio({formInicio, setFormInicio}){
    return (<>

        <div>
            <Button variant="secondary" onClick={() => {!formInicio ? setFormInicio(true) : setFormInicio(true)}}>Iniciar Sesión</Button>
            <Button variant="primary" onClick={() => {setFormInicio(false)}}>Regístrate</Button>
        </div>            
    </>)
}