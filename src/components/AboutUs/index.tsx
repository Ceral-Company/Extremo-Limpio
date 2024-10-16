import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TbClockHour5 } from "react-icons/tb";
import { IoMdTrophy } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { TbPigMoney } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";


function AboutUs() {
    return (
        <div className="">
            {/*Titulo*/}
            <div className="text-center">
                <h1 className="text-xl font-bold mt-8">ACERCA DE NOSOTROS</h1>
            </div>

            <div className="lg:flex lg:flex-row">
                {/*Seccion 1*/}
                <div className="p-6 max-w-sm mx-auto flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <TbClockHour5 className="text-azul-iconos" size={50}/>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Horario Disponible</h3>
                    <p className="text-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis mollis, orci phasellus nascetur
                        quam fusce hendrerit
                        taciti et, per duis proin facilisi lacus cubilia magna curae. Massa tempor sociosqu fusce
                        eleifend
                        et etiam quisque, justo hene.
                    </p>
                </div>

                {/*Seccion 2*/}
                <div className="p-6 max-w-sm mx-auto flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <IoMdTrophy className="text-azul-iconos" size={50}/>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Agentes Calificados</h3>
                    <p className="text-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis mollis, orci phasellus nascetur
                        quam fusce hendrerit
                        taciti et, per duis proin facilisi lacus cubilia magna curae. Massa tempor sociosqu fusce
                        eleifend
                        et etiam quisque, justo hene.
                    </p>
                </div>

                {/*Seccion 3*/}
                <div className="p-6 max-w-sm mx-auto flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <BiSolidOffer className="text-azul-iconos" size={50}/>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Mejores Ofertas</h3>
                    <p className="text-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis mollis, orci phasellus nascetur
                        quam fusce hendrerit
                        taciti et, per duis proin facilisi lacus cubilia magna curae. Massa tempor sociosqu fusce
                        eleifend
                        et etiam quisque, justo hene.
                    </p>
                </div>

                {/*Seccion 4*/}
                <div className="p-6 max-w-sm mx-auto flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <TbPigMoney className="text-azul-iconos" size={50}/>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Precios Justos</h3>
                    <p className="text-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis mollis, orci phasellus nascetur
                        quam fusce hendrerit
                        taciti et, per duis proin facilisi lacus cubilia magna curae. Massa tempor sociosqu fusce
                        eleifend
                        et etiam quisque, justo hene.
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                {/*Pregunta 1*/}
                <div className="mx-8 py-3">
                    <Accordion>
                        <AccordionSummary expandIcon={<IoIosAdd className="text-azul-iconos" size={25}/>}
                                          className="justify-between bg-blue-200">
                            <p className="text-purple text-sm font-semibold">
                                Acerca de la compañia
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sagittis mollis, orci phasellus
                                nascetur
                                quam fusce hendrerit taciti et, per duis proin facilisi lacus cubilia magna curae. Massa
                                tempor sociosqu fusce eleifend
                                et etiam quisque, justo hene.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>

                {/*Pregunta 2*/}
                <div className="mx-8 py-3">
                    <Accordion>
                        <AccordionSummary expandIcon={<IoIosAdd className="text-azul-iconos" size={25}/>}
                                          className="justify-between bg-blue-200">
                            <p className="text-purple text-sm font-semibold">
                                Nuestra Misión
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sagittis mollis, orci phasellus
                                nascetur
                                quam fusce hendrerit taciti et, per duis proin facilisi lacus cubilia magna curae. Massa
                                tempor sociosqu fusce eleifend
                                et etiam quisque, justo hene.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>

                {/*Pregunta 3*/}
                <div className="mx-8 py-3">
                    <Accordion>
                        <AccordionSummary expandIcon={<IoIosAdd className="text-azul-iconos" size={25}/>}
                                          className="justify-between bg-blue-200">
                            <p className="text-purple text-sm font-semibold">
                                Nuestra Visión
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sagittis mollis, orci phasellus
                                nascetur
                                quam fusce hendrerit taciti et, per duis proin facilisi lacus cubilia magna curae. Massa
                                tempor sociosqu fusce eleifend
                                et etiam quisque, justo hene.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>

                {/*Pregunta 4*/}
                <div className="mx-8 py-3">
                    <Accordion>
                        <AccordionSummary expandIcon={<IoIosAdd className="text-azul-iconos" size={25}/>}
                                          className="justify-between bg-blue-200">
                            <p className="text-purple text-sm font-semibold">
                                Nuestra Metas
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sagittis mollis, orci phasellus
                                nascetur
                                quam fusce hendrerit taciti et, per duis proin facilisi lacus cubilia magna curae. Massa
                                tempor sociosqu fusce eleifend
                                et etiam quisque, justo hene.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
