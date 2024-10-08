import React from "react";
import Image from "next/image";
import ImgFondo from "@/assets/Hero-Pc.svg"
import ImgFondoCel from "@/assets/Hero-Cel.svg"

function Hero() {
    return (
        <div>
            {/*PC*/}
            <div className="sm:flex hidden">
                <Image alt="Fondo Coliseo y mundo" className="h-full w-full" src={ImgFondo}/>
            </div>

            {/*FondoCel*/}
            <div className="sm:hidden">
                <Image alt="FondoPC" className="h-full w-full" src={ImgFondoCel}/>
            </div>

        </div>
    )
}

export default Hero;