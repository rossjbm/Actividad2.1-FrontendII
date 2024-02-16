import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function FormIniciar() {
    const [iniciar, setIniciar] = useState({
        correo: '',
        password: '',
        confirmar_p: '',
     });

    const handleChange = (e) => {
        setIniciar({ ...iniciar, [e.target.name]: e.target.value})
    };
    const enviar = (e) => {
        e.preventDefault();
        console.log(iniciar);
    };
    
    return (<>
        <Form className='p-3 my-20 bg-orange-200 rounded'>
            <h4 className='text-center m-4'>Iniciar Sesión</h4>
            <FloatingLabel controlId="correo" label="Email" className="my-3" >
                <Form.Control type="email" placeholder="nombre@correo.com" name='correo' value={iniciar.correo} onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='password' value={iniciar.password} onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="confirmar_p" label="Confirmar Contraseña" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='confirmar_p' value={iniciar.confirmar_p} onChange={handleChange}/>
            </FloatingLabel>
            <div className='flex justify-center mb-6 mt-10'>
                <button type="submit" onClick={enviar} className='bg-white text-black-300 p-2 rounded w-24 h-8 text-xl h-14'>Iniciar</button>
            </div>
        </Form>
    </>)
}