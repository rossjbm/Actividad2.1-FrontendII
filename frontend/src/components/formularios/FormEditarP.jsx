import { B_salir } from '../botones/Botones';

// estilos
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const TodasCategorias = ["Nevera", "Lavadora", "Aire Acondicionado", "Microondas", "Licuadora", "Televisor", "Congelador"]


export function FormEditarP({editable, handleChange, enviar, setEditarMostrar}) {

    return(<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black-100 '>
        <Form className='w-11/12 h-5/6 bg-orange-200 border-4 border-orange-300 rounded overflow-y-auto px-5 py-6 flex flex-col justify-start items-center gap-4 sm:w-3/5'>
            <div className='flex justify-end w-full'>
                <B_salir estado={setEditarMostrar} />
            </div>
            <div className='w-full '>
                
                <h4 className='text-center mt-1 mb-4'>Editar Producto</h4>

                <FloatingLabel controlId="nombre" label="Nombre del Producto" className="mb-3">
                    <Form.Control type="text" placeholder="Galko" name='nombre' value={editable.nombre} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="descripcion" label="Descripcion" className="mb-3">
                    <Form.Control type="text" placeholder="Galko" name='descripcion' value={editable.descripcion} onChange={handleChange}/>
                </FloatingLabel>

                <Form.Select aria-label="Default select example" className='w-16' name='categoria' onChange={handleChange}>
                        <option>Categorías</option>
                        {TodasCategorias.map((c, i) => ( 
                            <>
                            <option key={i} value={c} >{c}</option>
                            </> 
                        ))}
                </Form.Select>

                <FloatingLabel controlId="cantidad" label="Cantidad Actual" className="my-3" >
                    <Form.Control type="number" placeholder="6m" name='cantidad' value={editable.cantidad} onChange={handleChange}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="precio" label="Precio" className="my-3" >
                    <Form.Control type="number" placeholder="6m" name='precio' value={editable.precio} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="marca" label="Marca" className="my-3" >
                    <Form.Control type="text" placeholder="6m" name='marca' value={editable.marca} onChange={handleChange}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="img" label="Ingresa URL de la Imagen" className="my-3" >
                    <Form.Control type="text" placeholder="6m" name='img' value={editable.img} onChange={handleChange}/>
                </FloatingLabel>
                

                <div className='flex justify-center mb-6 mt-10'>
                    <Button type="submit" onClick={enviar} style={{background:'#212226', border:'none'}} className='pb-4 rounded w-24 h-10 text-xl'>Editar</Button>
                </div>
            </div>
        </Form>
    </div>)
    
}