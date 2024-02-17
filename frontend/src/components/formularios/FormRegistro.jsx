import { useState } from 'react';
import { EnvioRegistro } from '../../functions/F_fetch';
import { mostrarSeccion } from '../../functions/F_mostrar';

// estilos
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function FormRegistro() {
    const [registro, setRegistro] = useState({
        nombre: "",
        apellido:"",
        user: "",
        password: "",
        confirmar_p: "",
        correo: "",
        clave: ""
    });
    const [admin, setAdmin] = useState(false)

    const handleChange = (e) => {
        setRegistro({ ...registro, [e.target.name]: e.target.value})
    };
    const enviar = async (e) => {
        e.preventDefault();
        console.log(registro);
        await EnvioRegistro(registro)
    };
    
    return (<>
        <Form className='p-3 my-20 bg-orange-200 rounded'>
            <h4 className='text-center m-4'>Regístrate</h4>

            <FloatingLabel controlId="nombre_usuario" label="Nombre" className="mb-3">
                <Form.Control type="text" placeholder="Galko" name='nombre' value={registro.nombre} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="apellido_usuario" label="Apellido" className="mb-3">
                <Form.Control type="text" placeholder="Galko" name='apellido' value={registro.apellido} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="usuario" label="Usuario" className="mb-3">
                <Form.Control type="text" placeholder="Galko" name='user' value={registro.user} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="correo" label="Email" className="my-3" >
                <Form.Control type="email" placeholder="nombre@correo.com" name='correo' value={registro.correo} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='password' value={registro.password} onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="confirmar_p" label="Confirmar Contraseña" className="mb-5">
                <Form.Control type="password" placeholder="Password" name='confirmar_p' value={registro.confirmar_p} onChange={handleChange}/>
            </FloatingLabel>

            <div className='text-center'>
                <button className="text-sm " onClick={(e) => {mostrarSeccion(e, admin, setAdmin)}}>¿Serás administrador? Presiona aquí</button>
            </div>

            {admin ? <>
                <FloatingLabel controlId="clave" label="Clave de Administrador" className="my-3">
                    <Form.Control type="password" placeholder="Password" name='clave' value={registro.clave} onChange={handleChange}/>
                </FloatingLabel>
            </> : null}

            <div className='flex justify-center mb-6 mt-10'>
                <button type="submit" onClick={enviar} className='bg-white text-black-300 px-8 py-2 rounded w-auto h-10 text-xl'>Aceptar</button>
            </div>
        </Form>
    </>)
}