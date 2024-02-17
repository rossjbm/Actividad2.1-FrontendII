import { B_salir } from '../botones/Botones';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function RenderizarDetalles({detallePMostrar, detalleP, setDetallePMostrar}) {

    return (<>
        {detallePMostrar ? <>
            <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black-100">
                <div className="w-11/12 h-5/6 bg-white border-4 border-orange-300 rounded overflow-y-auto px-4 py-7 flex flex-col justify-start items-center gap-4">
                    <div className='flex justify-end w-full'>
                        <B_salir estado={setDetallePMostrar} />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <h2 className='text-center '>{detalleP[0].nombre}</h2>
                        <div className='w-11/12'>
                            <img src={detalleP[0].img} atl={detalleP[0].nombre} className='border-2 border-orange-300 rounded'/>
                            <p className='text-lg text-center p-2'>disponibles {detalleP[0].cantidad} uds</p>
                        </div>
                        <p className='text-2xl font-bold'>${detalleP[0].precio} </p>
                    </div>
                    <div className='flex felx-col justify-center'>
                        <Card style={{ width: '90%', border:'3px solid #F38749' , background: '#FBBA94'}} className='py-3'>
                            <Card.Header as="h5" className='text-center'>Detalles</Card.Header>
                            <ListGroup variant="flush">
                                <Card.Title className='pl-4'>Marca</Card.Title>
                                <ListGroup.Item>{detalleP[0].marca}</ListGroup.Item>
                                <Card.Title className='pl-4'>Categoría</Card.Title>
                                <ListGroup.Item>{detalleP[0].categoria}</ListGroup.Item>
                                <Card.Title className='pl-4'>Descripción</Card.Title>
                                <ListGroup.Item>{detalleP[0].descripcion}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </section>
        </> : null}
    </>)
}
