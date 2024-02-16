import { CiInstagram } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTelegramLogo } from "react-icons/pi";

export function Footer() {
    return (<>
        <footer className="bg-gradient-to-tl from-orange-200 to-grey-100 flex flex-row items-center justify-center mt-7 my-0 p-2 sm:justify-around">
            <div className="hidden sm:flex sm:justify-center">
                <img
                    alt="Logo ElectroDom"
                    src="https://github.com/rossjbm/Actividad2.1-FrontendII/blob/main/img/logo2.jpeg?raw=true"
                    className="rounded-full w-36 h-auto"
                />
            </div>
            <div className="flex flex-col justify-center items-center m-0 gap-3">
                <p className=" text-center text-xl">¡Somos ElectroDom!</p>
                <p className="text-lg">electrodom@correoficticio.com</p>
                <div className="flex gap-6">
                    <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><CiInstagram className="text-4xl text-black-100"/></a>
                    <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><VscGithubAlt className="text-4xl text-black-100"/></a>
                    <a href='#' className="bg-white p-1 rounded-full shadow-xl hover:scale-110"><PiTelegramLogo className="text-4xl text-black-100"/></a>
                </div>
                <p className="text-sm text-black-100">© 2024 Todos los derechos reservados</p>
            </div>
        </footer>
    </>)
}