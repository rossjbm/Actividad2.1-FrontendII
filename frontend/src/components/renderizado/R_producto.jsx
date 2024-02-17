import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export function RenderizarProductos({resultado, sesion}){
    
    if (resultado && resultado.length === 0) {
        return (<p className="text-center font-textos text-xl text-beige-800">No Se Encontraron Resultados</p>)
    } else if (resultado) {
        return (<div className="py-5 px-3 grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:px-10">
            {resultado.map((producto, i) => (
                <section key={i}>
                    <div>
                        {sesion===1?
                            <p>boton fav</p>
                        : <p>boton basura</p>}
                    </div>
                    <div>
                        <img src={producto.img} atl={producto.nombre} className='w-24 h-24'/>
                    </div>
                    <div>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.categoria}</p>
                        <div>
                            <p>{producto.precio}</p>
                            <p>{producto.cantidad}</p>
                        </div>
                    </div>
                    <div>
                        {sesion===1?
                            <p>boton comprar</p>
                        : <p>boton ver o editar</p>}
                    </div>
                </section>
            ))}
        </div>)
    }
}