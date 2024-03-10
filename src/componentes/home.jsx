import { Redes } from "./componentesHome/redes";

export function Home() {
    return (
        <div className="text-2xl mt-2">
            <div style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(src/assets/common-bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
            }}>     


            <div className="">
                <Redes />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-7xl text-center">HOLA, SOY AARÓN VIDAÑA</h1>
                <h5 className="text-gray-700 text-center mt-6">
                    Desarrollador web orientado a resultados, construyendo y gestionando sitios web y aplicaciones web que conducen al éxito del producto en general.
                </h5>
                <div className="text-center mt-6">
                    <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        PROYECTOS
                    </button>
                </div>
            </div>

        
            </div>
        </div>
    );
}
