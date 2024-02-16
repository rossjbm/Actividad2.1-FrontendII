import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { B_inicio } from "./botones/B_inicio";
import { B_menu } from "./botones/B_menu";

//estilos
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export function Header({sesion, formInicio, setFormInicio, menu, setMenu}){

    return (<>
        <Navbar className="bg-slate-600">
            <Container>
            <Navbar.Brand>
                <img
                alt="Logo ElectroDom"
                src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/Logo.png?raw=true"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                ElectroDom
            </Navbar.Brand>
            <Navbar.Brand className="m-0 p-0">
                <div className="flex items-center">
                    {sesion===0 ? 
                        <>
                            <div>
                                <B_inicio formInicio={formInicio} setFormInicio={setFormInicio}/>
                            </div>
                        </>
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