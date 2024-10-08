'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "@/assets/Logo-Extremo.svg";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Redes Sociales*/}
            <div className="bg-black flex flex-row justify-center">
                <FaFacebookF className="text-white my-3 mr-4" size={30}/>
                <FaTwitter className="text-white my-3 mr-4" size={30}/>
                <FaInstagram className="text-white my-3 mr-4" size={30}/>
                <FaYoutube className="text-white my-3" size={30}/>
            </div>

            <nav className="bg-white">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center py-3">
                        <Image src={Logo} alt="Logo Extremo Limpio" width={350} height={350}/>
                    </div>
                    <div className="hidden md:flex space-x-4 mt-4">
                        <a href="/" className="text-black text-lg font-semibold hover:text-azul-clarito">Inicio</a>
                        <a href="/services" className="text-black text-lg font-semibold hover:text-azul-clarito">Servicios</a>
                        <a href="/projects" className="text-black text-lg font-semibold hover:text-azul-clarito">Proyectos</a>
                        <a href="/contact" className="text-black text-lg font-semibold hover:text-azul-clarito">Contacto</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-red-600 focus:outline-none mr-2">
                            {/* Icono de menú */}
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Menú desplegable para móviles */}
                <div className={`${isOpen ? 'bg-white' : 'hidden'} md:hidden `}>
                    <a href="/" className="block px-4 py-2 text-lg font-semibold text-black hover:text-azul-clarito">Inicio</a>
                    <a href="/services" className="block px-4 py-2 text-lg font-semibold text-black hover:text-azul-clarito">Servicios</a>
                    <a href="/projects" className="block px-4 py-2 text-lg font-semibold text-black hover:text-azul-clarito">Proyectos</a>
                    <a href="/contact" className="block px-4 py-2 text-lg font-semibold text-black hover:text-azul-clarito">Contacto</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;