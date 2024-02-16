import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Registrar } from "./components/FormRegistrar";
import { Landing } from './components/Landing';

function App() {
  const [sesion, setSesion] = useState(0);
  const [menu, setMenu] = useState(false)
  const [formInicio, setFormInicio] = useState(true);
  //secciones
  const [inicioMostrar, setInicioMostrar] = useState(false)
  const [favoritosMostrar, setFavoritosMostrar] = useState(false)
  const [perfilMostrar, setPerfilMostrar] = useState(false)


  return (
    <>
      <Menu menu={menu} setMenu={setMenu} sesion={sesion} setFavoritosMostrar={setFavoritosMostrar} setInicioMostrar={setInicioMostrar} setPerfilMostrar={setPerfilMostrar} />

      <Header sesion={sesion} formInicio={formInicio} setFormInicio={setFormInicio} menu={menu} setMenu={setMenu}/>

      {sesion===0 ? 
        <Landing formInicio={formInicio} setFormInicio={setFormInicio}/>
      : <></>}

      {favoritosMostrar ? <h2>FAVORITO</h2> : <></>}
      {inicioMostrar ? <h2>INICIO</h2> : <></>}
      {perfilMostrar ? <h2>PERFIL</h2> : <></>}
      {/* <Registrar></Registrar> */}
    </>
  )
}

export default App
