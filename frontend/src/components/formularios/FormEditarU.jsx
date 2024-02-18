import { B_salir } from '../botones/Botones';

// estilos
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export function FormEditarU({editable, handleChange, enviar, setEditarMostrar}) {

    return(<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black-100 '>
        <Form className='w-11/12 h-5/6 bg-orange-200 border-4 border-orange-300 rounded overflow-y-auto px-5 py-6 flex flex-col justify-start items-center gap-4 sm:w-3/5'>
            <div className='flex justify-end w-full'>
                <B_salir estado={setEditarMostrar} />
            </div>
            <div className='w-full '>
                
                <h4 className='text-center mt-1 mb-4'>Editar Usuario</h4>

                <FloatingLabel controlId="nombre_usuario" label="Nombre" className="mb-3">
                    <Form.Control type="text" placeholder="Galko" name='nombre' value={editable.nombre} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="apellido_usuario" label="Apellido" className="mb-3">
                    <Form.Control type="text" placeholder="Galko" name='apellido' value={editable.apellido} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="usuario" label="Usuario" className="mb-3">
                    <Form.Control type="text" placeholder="Galko" name='user' value={editable.user} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="correo" label="Email" className="my-3" >
                    <Form.Control type="email" placeholder="nombre@correo.com" name='correo' value={editable.correo} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="tlf" label="Teléfono" className="mb-3">
                    <Form.Control type="text" placeholder="04132" name='tlf' value={editable.tlf} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="direccion" label="Dirección" className="mb-5">
                    <Form.Control type="text" placeholder="Address" name='direccion' value={editable.direccion} onChange={handleChange}/>
                </FloatingLabel>

                <div className='flex justify-center mb-6 mt-10'>
                    <Button type="submit" onClick={enviar} style={{background:'#212226', border:'none'}} className='pb-4 rounded w-24 h-10 text-xl'>Editar</Button>
                </div>
            </div>
        </Form>
    </div>)
    
}