import React from 'react';
import Image from "next/image";
import { MdChair } from "react-icons/md";

function OurServices() {
    return (
        <div className="bg-white text-gray-900">
            <div className="text-center py-8">
                <h2 className="text-2xl font-bold">NUESTROS SERVICIOS</h2>
                <p className="text-xl md:mx-20 mx-16">Brindamos servicios en todo tipo de lavado en tu hogar y tu auto como lavado y
                    encerado e impermeabilización con el mejor material</p>
            </div>

            <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center">
                <div className="flex items-center lg:mx-6">
                    <div className="mt-6 mr-4">
                        <MdChair className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={60}/>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="mt-5 text-lg mb-2">Servicios de Lavado</h3>
                        <p className="text-sm text-light-gray mb-2">Brindamos servicios en todo tipo de <br/> trabajos
                            del hogar desde...</p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

                <div className="flex items-center lg:mx-6">
                    <div className="mt-6 mr-4">
                        <MdChair className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={60}/>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="mt-5 text-lg mb-2">Servicios de Lavado</h3>
                        <p className="text-sm text-light-gray mb-2">Brindamos servicios en todo tipo de <br/> trabajos
                            del hogar desde...</p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

                <div className="flex items-center lg:mx-6">
                    <div className="mt-6 mr-4">
                        <MdChair className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={60}/>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="mt-5 text-lg mb-2">Servicios de Lavado</h3>
                        <p className="text-sm text-light-gray mb-2">Brindamos servicios en todo tipo de <br/> trabajos
                            del hogar desde...</p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurServices;