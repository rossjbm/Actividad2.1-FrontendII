import { useState, useEffect } from "react"
import { mostrarSeccion } from "../functions/F_mostrar";

const TodasCategorias = ["Nevera", "Lavadora", "Aire Acondicionado", "Microondas", "Licuadora", "Televisor", "Congelador"]

export function Busqueda() {
    const [resultado, setResultado] = useState()
    const [categoria, setCategoria] = useState([]);
    const [valor, setValor] = useState("");
    const [seleccionar, setSeleccionar] = useState(false);

    useEffect(() => {
        if (valor || categoria) {

            const timer = setTimeout(() => { //espera por si hay un cambio
                handleChange();
            }, 2000);
        
            return () => { //al cambiar el valor
                clearTimeout(timer); //limpiamos tiempo
                setResultado([]); //limpiamos resultados
            };
        } else {
            console.log("mostrar todo")
        }
    }, [valor, categoria]);

    //enviamos al backend
    async function handleChange() {
        console.log("valor : ", valor, " categoria: ", categoria)
        console.log("estamos en mandar al backend. mostrar resultados")
    }

    return(<>
        <div className="flex flex-col justify-between items-center gap-10 my-12">
            <input type="text" placeholder="Ingresa nombre o descripción..." value={valor} onChange={(e) => {setValor(e.target.value)}} className="w-11/12 h-14 rounded bg-orange-200 px-3 focus:outline-none focus:border-2 focus:border-orange-300 focus:bg-white text-2xl placeholder:text-black-100 shadow-2xl"></input>

            <div className="flex flex-col justify-center items-center p-3 gap-8">
                <button className="text-black-100 text-lg" onClick={(e) => mostrarSeccion(e, seleccionar, setSeleccionar)}>Selecciona una Categoría ¡Aquí!</button>

                <div className={seleccionar ? "flex flex-wrap justify-center" : "hidden"}>
                    {TodasCategorias.map((c, i) => ( 
                        <label id={i} className={`m-1 p-1 rounded-3xl ${categoria.includes(c) ? 'bg-orange-300 px-3 text-white' : 'border-1 border-black-300 bg-white px-3'}`} > 
                            <input type="checkbox" name="categoria" value={c} checked={categoria.includes(c)}  onChange={(e) => {e.target.checked ? setCategoria([...categoria, e.target.value]) : setCategoria(categoria.filter(o => o !== e.target.value))}} className="hidden"></input> 
                            <span className="text-lg">{c}</span> 
                        </label> 
                    ))}
                </div>
            </div>
        </div>
    </>)
}