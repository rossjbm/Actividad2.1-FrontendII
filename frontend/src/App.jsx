import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Landing } from './components/Landing';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';

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
      <header>
        <Menu menu={menu} setMenu={setMenu} sesion={sesion} setFavoritosMostrar={setFavoritosMostrar} setInicioMostrar={setInicioMostrar} setPerfilMostrar={setPerfilMostrar} />

        <Header sesion={sesion} formInicio={formInicio} setFormInicio={setFormInicio} menu={menu} setMenu={setMenu}/> 
      </header>

      <main className='min-h-[640px] sm:min-h-96'>
        {sesion===0 ? 
          <Landing formInicio={formInicio} setFormInicio={setFormInicio}/>
        : <> <Inicio sesion={sesion}/> </>}

        {favoritosMostrar ? <h2>FAVORITO</h2> : <></>}
        {inicioMostrar ? <h2>INICIO</h2> : <></>}
        {perfilMostrar ? <h2>PERFIL</h2> : <></>}
      </main>
      <Footer/>
    </>
  )
}

export default App
