import { useState } from 'react';
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Landing } from './components/Landing';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { Usuarios } from './components/Usuarios';
import { NuevoProducto } from './components/NuevoProducto';
import { Perfil } from './components/global/MiPerfil';
import { Favoritos } from './components/Favorito';

function App() {
  const [sesion, setSesion] = useState(0);
  const [menu, setMenu] = useState(false)
  const [formInicio, setFormInicio] = useState(true);
  //secciones
  const [inicioMostrar, setInicioMostrar] = useState(true)
  const [favoritosMostrar, setFavoritosMostrar] = useState(false)
  const [perfilMostrar, setPerfilMostrar] = useState(false)
  const [usuariosMostrar, setUsuariosMostrar] = useState(false)
  const [agregarMostrar, setAgregarMostrar] = useState(false)


  return (
    <>
      <header>
        <Menu menu={menu} setMenu={setMenu} sesion={sesion} setSesion={setSesion} setFavoritosMostrar={setFavoritosMostrar} setInicioMostrar={setInicioMostrar} setPerfilMostrar={setPerfilMostrar} setUsuariosMostrar={setUsuariosMostrar} setAgregarMostrar={setAgregarMostrar} />

        <Header sesion={sesion} formInicio={formInicio} setFormInicio={setFormInicio} menu={menu} setMenu={setMenu}/> 
      </header>

      <main className='min-h-[640px] sm:min-h-96'>
        {sesion===0 ? 
          <Landing setSesion={setSesion} formInicio={formInicio} setFormInicio={setFormInicio}/>
        : inicioMostrar? <> <Inicio sesion={sesion} setSesion={setSesion} inicioMostrar={inicioMostrar} /> </> 
        : favoritosMostrar? <Favoritos sesion={sesion} setSesion={setSesion} inicioMostrar={inicioMostrar}/>
        : perfilMostrar? <Perfil perfilMostrar={perfilMostrar}/>
        : usuariosMostrar? <Usuarios/>
        : agregarMostrar? <NuevoProducto/>
        : <></>}

      </main>
      <Footer/>
    </>
  )
}

export default App
