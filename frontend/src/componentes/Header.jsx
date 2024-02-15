import Logo from "../assets/logoMientras.jpeg"


export function Header(sesion){

    return (<>
        <header>
            <img src={Logo} alt="Logo ElectroDom" className=" h-20 rounded-3xl "/>

            <div>
                {sesion=0 ? 
                    <></>
                    : <>
                        <button></button>
                    </>
                }
            </div>
        </header>
    </>)
}