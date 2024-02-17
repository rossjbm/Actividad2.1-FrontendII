import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { revisarJWT } from '../../functions/F_revisarJWT';

export function FormIniciar() {
    const [iniciar, setIniciar] = useState({
        user: '',
        password: '',
        recordar:false
        
     });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? setIniciar({ ...iniciar, [e.target.name]: e.target.checked}) : setIniciar({ ...iniciar, [e.target.name]: e.target.value});
        
    };
    const enviar = (e) => {
        e.preventDefault();
        console.log(iniciar);

        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(iniciar)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Guardar el token en el almacenamiento local
            localStorage.setItem('token', data.token);
            revisarJWT()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    return (<>
        <Form className='p-3 my-20 bg-orange-200 rounded'>
            <h4 className='text-center m-4'>Iniciar Sesión</h4>
            <FloatingLabel controlId="user" label="Usuario" className="my-3" >
                <Form.Control type="text" placeholder="Usuario" name='user' value={iniciar.user} onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='password' value={iniciar.password} onChange={handleChange}/>
            </FloatingLabel>
            <Form.Group>
                <Form.Check type='checkbox' label='Recordar este dispositivo' checked={iniciar.recordar} onChange={handleChange} name='recordar'></Form.Check>
            </Form.Group>
            <Form.Group className='flex justify-center mb-6 mt-10' >
                <Button type="submit" onClick={enviar} className='bg-black-200 text-black-300 pb-4 rounded w-24 h-10 text-xl'>Iniciar</Button>
            </Form.Group>
        </Form>
    </>)
}