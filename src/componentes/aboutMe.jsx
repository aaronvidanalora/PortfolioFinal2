import { Columna1 } from "./componentesAboutMe/Columna1";
import { Columna2 } from "./componentesAboutMe/Columna2";

export function AboutMe() {
    return (
        <div className="text-2xl mt-2 bg-gray-50">
            <div className="text-center">
                <h1 className="mt-16 m-8 font-bold text-5xl">ABOUT ME</h1>
                <div className="border-b-8 border-purple-600 w-8 mx-auto rounded-full"></div>

                <h5 className="text-gray-700 text-center mt-6"> 
                 Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
                </h5>


                <div className="flex p-5 m-12">
                    <div className="column w-1/2 ">
                    <Columna1 />
                    
                    </div>
                    <div className="column w-1/2 ml-5 ">
                    <Columna2 />
                    </div>
                </div>
            </div>

           
        </div>
    );
}
