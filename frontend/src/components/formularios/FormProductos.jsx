// estilos
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const TodasCategorias = ["Nevera", "Lavadora", "Aire Acondicionado", "Microondas", "Licuadora", "Televisor", "Congelador"]


export function FormProductos({nuevoP, handleChange, enviar}) {

    return(<div className='flex justify-center'>
        <Form className='p-3 my-14 bg-orange-200 rounded sm:w-5/6 lg:w-3/5'>
            <h4 className='text-center m-4'>Agregar Producto</h4>

            <FloatingLabel controlId="nombre" label="Nombre del Producto" className="mb-3">
                <Form.Control type="text" placeholder="Galko" name='nombre' value={nuevoP.nombre} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="descripcion" label="Descripcion" className="mb-3">
                <Form.Control type="text" placeholder="Galko" name='descripcion' value={nuevoP.descripcion} onChange={handleChange}/>
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
                <Form.Control type="number" placeholder="6m" name='cantidad' value={nuevoP.cantidad} onChange={handleChange}/>
            </FloatingLabel>
            
            <FloatingLabel controlId="precio" label="Precio" className="my-3" >
                <Form.Control type="number" placeholder="6m" name='precio' value={nuevoP.precio} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="marca" label="Marca" className="my-3" >
                <Form.Control type="text" placeholder="6m" name='marca' value={nuevoP.marca} onChange={handleChange}/>
            </FloatingLabel>
            
            <FloatingLabel controlId="img" label="Ingresa URL de la Imagen" className="my-3" >
                <Form.Control type="text" placeholder="6m" name='img' value={nuevoP.img} onChange={handleChange}/>
            </FloatingLabel>
            

            <div className='flex justify-center mb-6 mt-10'>
                <Button type="submit" onClick={enviar} style={{background:'#212226', border:'none'}} className='pb-4 rounded w-24 h-10 text-xl'>Agregar</Button>
            </div>
        </Form>
    </div>)
    
}