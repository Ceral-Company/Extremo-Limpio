import React from 'react';
import { MdFormatPaint } from "react-icons/md";
import { MdChair } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { GiFloorPolisher } from "react-icons/gi";


function OurServices() {
    return (
        <div className="bg-white">
            <div className="text-center py-8">
                <h2 className="text-2xl font-bold mb-4">NUESTROS SERVICIOS</h2>
                <p className="text-xl text-light-gray  mx-10">Brindamos servicios en todo tipo de lavado en tu hogar y tu auto como lavado y
                    encerado e impermeabilización con el mejor material</p>
            </div>

            <div className="flex flex-col xl:flex xl:flex-row justify-center">
                {/* Lavado De Salas */}
                <div className="mx-8">
                    <div className="flex justify-center">
                        <MdChair className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={70}/>
                    </div>
                    <div className="text-center mb-10">
                        <h3 className="my-2 text-xl">Lavado De Salas</h3>
                        <p className="text-lg text-light-gray my-2">
                            Sillas De Tela, Colchones, Alfombras, <br/>
                            Tapetes y Vestiduras
                        </p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES</a>
                    </div>
                </div>

                {/* Servicios De Impermeabilización */}
                <div className="mx-8">
                    <div className="flex justify-center">
                        <MdFormatPaint className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={70}/>
                    </div>
                    <div className="text-center mb-10">
                        <h3 className="my-2 text-xl">Servicios De Impermeabilización</h3>
                        <p className="text-lg text-light-gray my-2">
                            Pintura Exterior e Interior, <br/>
                            Lavado De Alfombras Fijas, <br/>
                            Lavado De Tinacos y Cisternas. </p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

                {/* Limpieza a Residenciales */}
                <div className="mx-8">
                    <div className="flex justify-center">
                        <FaHouse className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={70}/>
                    </div>
                    <div className="text-center mb-10">
                        <h3 className="my-2 text-xl">Limpieza a Residenciales</h3>
                        <p className="text-lg text-light-gray my-2">
                            Edificios, Casas, Departamentos, <br/>
                            Jardinería y fumigación.</p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

                {/* Pulido De Pisos */}
                <div className="mx-8">
                    <div className="flex justify-center">
                        <GiFloorPolisher className="bg-azul-iconos text-white rounded-full py-[10px] px-[10px]" size={70}/>
                    </div>
                    <div className="text-center mb-10">
                        <h3 className="my-2 text-xl">Limpieza a Residenciales</h3>
                        <p className="text-lg text-light-gray my-2">
                            Edificios, Casas, Estacionamientos, <br/>
                            Funerarias, Hospitales y <br/>
                            Salones de eventos</p>
                        <a href="#" className="text-azul-clarito hover:text-blue-400">VER DETALLES </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurServices;