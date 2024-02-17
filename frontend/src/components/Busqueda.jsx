import { useState, useEffect } from "react"
import { mostrarSeccion } from "../functions/F_mostrar";
import { ListarProductos } from "../functions/F_fetch";
import { Buscar } from "../functions/F_busqueda";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TodasCategorias = ["Nevera", "Lavadora", "Aire Acondicionado", "Microondas", "Licuadora", "Televisor", "Congelador"]

export function Busqueda({resultado, setResultado, setSesion, cargar, setCargar}) {
    const [categoria, setCategoria] = useState([]);
    const [valor, setValor] = useState("");
    const [seleccionar, setSeleccionar] = useState(false);
    const [error, setError] = useState("");
    const [modalShow, setModalShow] = useState(false);;

    useEffect( () => {
        async function fetchData() {
            if (valor || categoria) {
                setCargar(true)

                const timer = setTimeout(() => { //espera por si hay un cambio
                    handleChange();
                    setCargar(false)
                }, 2000);
    
                return () => { //al cambiar el valor
                    clearTimeout(timer); //limpiamos tiempo
                    setResultado([]); //limpiamos resultados
                    setCargar(true)
                };
            } else {
                const documentos = await servidor();
                setResultado(documentos); 
            }
        }
        fetchData();
    }, [valor, categoria]);


    //enviamos al backend
    async function servidor(){
        console.log("estamos en mandar al backend. mostrar resultados")
        // try {
        //     const documentos = await ListarProductos(setSesion)
        //     setResultado(documentos)
        //     return documentos
        // } catch (error) {
        //     if (error == "debe iniciar sesión") {
        //         setError('Debes iniciar sesión :D')
        //         setModalShow(true)
                
        //     }else{
        //         console.log(error);
        //     }
        // }
        const documentos = await ListarProductos(setSesion)
        setResultado(documentos)
        return documentos
    }

    // function MyVerticallyCenteredModal(props) {
    //     return (
    //       <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             Alerta
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //           <h4>{error}</h4>
              
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button variant="warning" onClick={props.onHide}>Entendido</Button>
    //         </Modal.Footer>
    //       </Modal>
    //     );
    //   }

    async function handleChange() {
        console.log(resultado)
        console.log("buscar")
        const documentos = await servidor()
        const resp = Buscar(valor, categoria, documentos)
        setResultado(resp)
    }

    return(<>
    {console.log(resultado)}
        <div className="flex flex-col justify-between items-center gap-10 my-12">
            <input type="text" placeholder="Ingresa nombre o descripción..." value={valor} onChange={(e) => {setValor(e.target.value)}} className="w-11/12 h-14 rounded bg-orange-200 px-3 focus:outline-none focus:border-2 focus:border-orange-300 focus:bg-white text-2xl placeholder:text-black-100 shadow-2xl"></input>

            <div className="flex flex-col justify-center items-center p-3 gap-8">
                <button className="text-black-100 text-lg hover:scale-105 active:font-bold" onClick={(e) => mostrarSeccion(e, seleccionar, setSeleccionar)}>Selecciona una Categoría ¡Aquí!</button>

                <div className={seleccionar ? "flex flex-wrap justify-center" : "hidden"}>
                    {TodasCategorias.map((c, i) => ( 
                        <label key={i} className={`m-1 p-1 rounded-3xl ${categoria.includes(c) ? 'bg-orange-300 px-3 text-white' : 'border-1 border-black-300 bg-white px-3'}`} > 
                            <input type="checkbox" name="categoria" value={c} checked={categoria.includes(c)}  onChange={(e) => {e.target.checked ? setCategoria([...categoria, e.target.value]) : setCategoria(categoria.filter(o => o !== e.target.value))}} className="hidden"></input> 
                            <span className="text-lg">{c}</span> 
                        </label> 
                    ))}
                </div>
            </div>
        </div>
        {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
            setModalShow(false);
            setError('');
            setSesion(0);
        }}
        /> */}

    </>)
}