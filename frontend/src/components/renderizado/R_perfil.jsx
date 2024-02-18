
//estilos
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUserLarge } from "react-icons/fa6";
import { EditarPerfil } from '../crud/EditarPerfil';

export function RenderizarPerfil({resultado, perfilMostrar, setResultado}) {
    console.log('soy resultado',resultado)
    return (<>
        {resultado ? 
        <section className='m-4 w-11/12 flex flex-col items-center gap-4'>
            <h2 className='text'>{resultado.nombre} {resultado.apellido}</h2>
            <div className='border-4 border-orange-300 rounded-full p-4'>
                <FaUserLarge className='text-8xl'/>
            </div>
            <div className='w-full flex justify-center'>
                <Card style={{ width: '90%', border:'3px solid #F38749' , background: '#FBBA94'}} className='py-3'>
                    <Card.Header as="h5" className='text-center'>Tu Información</Card.Header>
                    <ListGroup variant="flush">
                        <Card.Title className='pl-4'>Usuario</Card.Title>
                        <ListGroup.Item>{resultado.user} </ListGroup.Item>
                        <Card.Title className='pl-4'>Correo</Card.Title>
                        <ListGroup.Item>{resultado.correo}</ListGroup.Item>
                        <Card.Title className='pl-4'>Teléfono</Card.Title>
                        <ListGroup.Item> {resultado.tlf ? resultado.tlf : 'Ninguno registrado'} </ListGroup.Item>
                        <Card.Title className='pl-4'>Dirección</Card.Title>
                        <ListGroup.Item> {resultado.direccion ? resultado.direccion : 'Ninguna registrado'}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div>
                <EditarPerfil resultado={resultado} setResultado={setResultado} perfilMostrar={perfilMostrar}/>
            </div>
        </section> : null}
    </>)
}
