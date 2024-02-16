import  Form  from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Registrar() {
    return(
        <>
            
            <Col md={{ span: 6, offset: 3}}>
                <Form >
                    <Form.Group className="mb-3" Id='Correo'> 
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar correo" ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" lId="Contraseña">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" Id="ConfirmarContraseña">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Confirmar contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" Id="RecordarCheck">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                </Form>
            </Col>
        </>
    )
}