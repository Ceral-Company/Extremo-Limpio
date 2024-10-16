import React from 'react';
import Image from "next/image";
import ImgFondo from "@/assets/TusPreguntasPC.svg"
import ImgFondoCel from "@/assets/TusPreguntasCel.svg"

function YourQuestions() {
    return (
        <div>
            {/*PC*/}
            <div className="relative sm:flex hidden w-full">
                <Image className="object-cover w-full h-full" alt="Fondo Coliseo y mundo" src={ImgFondo} />

                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="flex flex-col ">
                        <h2 className="text-yellow text-lg lg:text-xl xl:text-3xl 2xl:text-3xl">¿No sabes en qué empezar?</h2>
                        <h1 className="text-white text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl pt-1 pb-2 lg:pt-4 lg:pb-6 xl:pt-6 xl:pb-8">Nuestro gerente responderá <br/> todas tus
                            preguntas</h1>
                        <button className="text-black bg-yellow text-base lg:text-lg xl:text-2xl py-[10px] 2xl:py-[25px]">
                            HACER UNA CITA
                        </button>
                    </div>
                </div>
            </div>

            {/*FondoCel*/}
            <div className="sm:hidden relative">
                <div>
                <Image className="w-full h-full" alt="FondoPC" src={ImgFondoCel}/>
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-base flex flex-col">
                        <div className=" pl-24">
                            <h2 className="text-yellow text-base">¿No sabes en qué empezar?</h2>
                            <h1 className="text-white text-lg pt-2 pb-4">Nuestro gerente responderá <br/> todas tus preguntas</h1>

                            <button className="text-black text-base bg-yellow py-[8px] px-[30px]">
                                HACER UNA CITA
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default YourQuestions;