import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Registrar } from "./components/FormRegistrar";

function App() {
  const [sesion, setSesion] = useState(1);
  const [menu, setMenu] = useState(false)
  const [formInicio, setFormInicio] = useState(true);
  //secciones
  const [inicioSection, setInicioSection] = useState(false)
  const [favoritosSection, setFavoritosSection] = useState(false)
  const [perfilSection, setPerfilSection] = useState(false)


  return (
    <>
      <Menu menu={menu} setMenu={setMenu} sesion={sesion} setFavoritosSection={setFavoritosSection} setInicioSection={setInicioSection} setPerfilSection={setPerfilSection} />
      <Header sesion={sesion} formInicio={formInicio} setFormInicio={setFormInicio} menu={menu} setMenu={setMenu}/>
      <h1>Tienda de Electrodomesticos</h1>
      {favoritosSection ? <h2>FAVORITO</h2> : <></>}
      {inicioSection ? <h2>INICIO</h2> : <></>}
      {perfilSection ? <h2>PERFIL</h2> : <></>}
      <Registrar></Registrar>
    </>
  )
}

export default App
