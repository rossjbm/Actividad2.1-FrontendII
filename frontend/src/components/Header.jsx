import { useState } from "react";
import { B_inicio } from "./botones/B_inicio";
import { B_menu } from "./botones/B_menu";

//estilos
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export function Header({sesion, formInicio, setFormInicio, menu, setMenu}){

    return (<>
        <Navbar className="bg-slate-600 bg-white">
            <Container>
            <Navbar.Brand className="flex">
                <img
                alt="Logo ElectroDom"
                src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/logo2.jpeg?raw=true"
                className="d-inline-block align-top rounded-full w-12"
                />{''}
                <h2 className="h-6 text-2xl ml-1 hidden sm:flex ">ElectroDom</h2>
            </Navbar.Brand>
            <Navbar.Brand className="m-0 p-0">
                <div className="flex items-center p-2">
                    {sesion===0 ? 
                        // Nadie ha iniciado sesión
                        <>
                            <div>
                                <B_inicio formInicio={formInicio} setFormInicio={setFormInicio}/>
                            </div>
                        </>
                        // se ha iniciado seción
                        : <>
                            <B_menu menu={menu} setMenu={setMenu}/>
                        </>
                    }
                </div>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </>)
}