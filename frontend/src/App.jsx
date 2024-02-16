import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";
import { Header } from "./components/Header"
import { Registrar } from "./components/FormRegistrar";

function App() {
  const [sesion, setSesion] = useState(0);
  const [formInicio, setFormInicio] = useState(true);

  return (
    <>
      <Header sesion={sesion} formInicio={formInicio} setFormInicio={setFormInicio} />
      <h1>Tienda de Electrodomesticos</h1>
      
      <Registrar></Registrar>
    </>
  )
}

export default App
