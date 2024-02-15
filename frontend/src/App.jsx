import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";
import { Header } from "./componentes/Header"


function App() {
  const [sesion, setSesion] = useState(0);

  return (
    <>
      <Header/>
      <h1>Tienda de Electrodomesticos</h1>
      
    </>
  )
}

export default App
