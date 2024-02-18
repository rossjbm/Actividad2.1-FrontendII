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
                var docu =  documentos;
                docu[i].cantidad = String(Number(documentos[i].cantidad)- 1)
                console.log('exito-1',docu[i].cantidad);
                console.log(setResultado(docu));
                 setResultado(docu);
                console.log(documentos);
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
            <button className='w-full h-14 bg-orange-300 hover:bg-orange-500 hover:scale-102 duration-200 border-solid border-2 rounded-md border-black-300 text-white text-2xl' onClick={(e)=>{e.preventDefault(),ComprarFetch(producto_id)}}>C O M P R A R</button>

        </>
    )
    
}