import { useState } from "react";
import { B_inicio } from "./botones/B_inicio";
import { B_menu } from "./botones/Botones";

//estilos
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export function Header({sesion, formInicio, setFormInicio, menu, setMenu}){

    return (<>
        <Navbar className=" bg-white border-b-2 shadow-xl max-w-full">
            <div className="flex justify-between items-center m-2 w-full">
            <Navbar.Brand className="flex">
                <img
                alt="Logo ElectroDom"
                src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/logo2.jpeg?raw=true"
                className="d-inline-block align-top rounded-full w-12"
                />{''}
                <div className="hidden sm:flex sm:items-center">
                    <h2 className="h-6 text-2xl ml-1   ">ElectroDom</h2>
                </div>
            </Navbar.Brand>
            <Navbar.Brand className="m-0 p-0">
                <div className="flex items-center justify-end p-2 w-full">
                    {sesion===0 ? 
                        // Nadie ha iniciado sesión
                        <>
                            <div>
                                <B_inicio formInicio={formInicio} setFormInicio={setFormInicio}/>
                            </div>
                        </>
                        // se ha iniciado seción
                        : <>
                            <B_menu estado={setMenu}/>
                        </>
                    }
                </div>
            </Navbar.Brand>
            </div>
        </Navbar>
    </>)
}