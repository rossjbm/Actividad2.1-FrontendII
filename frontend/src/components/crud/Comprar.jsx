import { revisarJWT } from "../../functions/F_revisarJWT";

export function ComprarButton({setResultado, i, documentos, setError, setModalShow, producto_id}) {

    async function ComprarFetch(id) {
        console.log('ide del producto: ',id);
        var token = await revisarJWT()
        //fetch
        
        fetch('http://localhost:3000/productos/comprar', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
           },
            body: JSON.stringify({'_id':id})
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                throw response.error
            }
            if (response.exito) {
                console.log('exito',documentos[i].cantidad);
                var docu =  [...documentos];
                var index = docu.findIndex(doc => doc._id === id); // Encuentra el índice del producto en la lista completa de documentos
                var nuevoDocu = {...docu[index], cantidad: String(Number(docu[index].cantidad)- 1)};
                var nuevosDocumentos = docu.map((documento, idx) => idx === index ? nuevoDocu : documento);
                nuevosDocumentos = nuevosDocumentos.filter(e => e.cantidad != "0");
                setResultado(nuevosDocumentos);
                console.log(nuevosDocumentos);
                return response.exito

            }
        })
        .catch ((error) => {
            console.log("Error:", error)
            setModalShow(true)
            setError({'error': error,'noRedirecting':true})
            throw error
        }) 


    }


    return(
        <>
            <button className='w-full h-14 bg-orange-300 focus:bg-orange-300 active:bg-orange-500 active:scale-102 duration-200 border-solid border-2 rounded-md border-black-300 text-white text-2xl' onClick={(e)=>{e.preventDefault(),ComprarFetch(producto_id)}}>C O M P R A R</button>

        </>
    )
    
}