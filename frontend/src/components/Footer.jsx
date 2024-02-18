import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

export function Footer() {
    return (<>
        <footer className="bg-gradient-to-tl from-orange-200 to-grey-100 flex flex-col  mt-7 my-0 p-2 sm:justify-around gap-4">
            <h4 className=" text-center text-xl my-3 sm:text-lg">¡Somos ElectroDom!</h4>
            <div className="flex flex-row items-center justify-center my-0 sm:justify-around">
                <div className="hidden sm:flex sm:justify-center">
                    <img
                        alt="Logo ElectroDom"
                        src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/logo2.jpeg?raw=true"
                        className="rounded-full w-36 h-auto sm:w-28"
                    />
                </div>
                <div className="flex flex-col justify-center items-center m-0 gap-3">
                    <p className=" text-center text-xl sm:text-base">Contáctanos</p>
                    <p className="text-lg sm:text-sm">electrodom@correoficticio.com</p>
                    <div className="flex gap-6">
                        <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><CiInstagram className="text-4xl text-black-300"/></a>
                        <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><FaGithub className="text-4xl text-black-300"/></a>
                        <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><PiTelegramLogo className="text-4xl text-black-300"/></a>
                    </div>
                </div>
            </div>
            <p className="text-sm text-black-100 text-center sm:text-xs">© 2024 Todos los derechos reservados</p>
        </footer>
    </>)
}