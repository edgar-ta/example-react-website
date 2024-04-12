import Milestone from "../milestone";
import Moment from "../moment";

import image_1__2022_10 from "./images/1--2022-10.png";
import image_2__2022_11 from "./images/2--2022-11.png";
import image_3__2022_11 from "./images/3--2022-11.png";
import image_4__2022_11_26 from "./images/4--2022-11-26.png";

import image_6__2022_12_17 from "./images/6--2022-12-17.png";
import image_7__2023_01 from "./images/7--2023-01.png";
import image_8__2023_01_14 from "./images/8--2023-01-14.png";
import image_9__2023_04_20 from "./images/9--2023-04-20.png";
import image_10__2023_04 from "./images/10--2023-04.png";
import image_11__2023_07_01 from "./images/11--2023-07-01.png";
import image_12__2023_07_24 from "./images/12--2023-07-24.png";
import image_13__2023_07_26 from "./images/13--2023-07-26.png";


import Thread from "./thread/thread";
import TimelineCover from "./timeline-cover";

export default function() {
    return (
        <section className="
        ">
            <TimelineCover />
            <div className="
            relative
            overflow-hidden
            bg-[linear-gradient(to_bottom,_black_5%,_white)]
            space-y-32
            ">
                <Milestone 
                    image={image_1__2022_10}
                    description="Primera reunión con todo el team de producción; se crea la compañía"
                    imageOrientation="right"
                    month="oct"
                    year={2022}
                    alt="Fotografía de los directivos de THB"
                    style="white"
                    />
                <Moment 
                    image={image_2__2022_11}
                    content="Primer entrenamiento de la compañía a cargo de la maestra Sam Contreras"
                    imageAlignment="right"
                    style="white"
                    title="NOVIEMBRE DEL 2022"
                    />
                <Milestone 
                    image={image_3__2022_11}
                    description="Primer show de la compañía en el municipio de Ezequiel Montes"
                    imageOrientation="right"
                    month="nov"
                    year={2022}
                    alt="Fotografía de los directivos de THB"
                    style="white"
                    />
                <Moment 
                    image={image_4__2022_11_26}
                    content="Entrenamiento a cargo de la maestra Amber Limbs"
                    imageAlignment="left"
                    style="white"
                    title="26 de noviembre del 2022"
                    />
                <Moment 
                    image={image_6__2022_12_17}
                    content="Cierre de actividades de la compañía “Mercadito Emprendedor” en San Juan del Río"
                    imageAlignment="left"
                    style="white"
                    title="17 de diciembre del 2022"
                    />
                <Milestone 
                    image={image_7__2023_01}
                    description="Junto al equipo de producción comenzamos con los preparativos del show debut de la compañía, “TSUNAMI”"
                    imageOrientation="right"
                    month="ene"
                    year={2023}
                    alt="Fotografía de los directivos de THB"
                    style="black"
                    />
                <Moment 
                    image={image_8__2023_01_14}
                    content="Arranque del primer semestre oficial de la compañía"
                    imageAlignment="left"
                    style="black"
                    title="14 de enero del 2023"
                    />
                <Moment 
                    image={image_9__2023_04_20}
                    content="Se hace la primera sesión de fotos con el concepto de “The House of Blues”"
                    imageAlignment="right"
                    style="black"
                    title="20 de abril del 2023"
                    />
                <Milestone 
                    image={image_10__2023_04}
                    description="Se hace oficial el anuncio de la compañía “The House of Blues”"
                    imageOrientation="left"
                    month="abr"
                    year={2023}
                    alt="Fotografía de los directivos de THB"
                    style="black"
                    />
                <Moment 
                    image={image_11__2023_07_01}
                    content="Se inician los ensayos generales con todos los miembros del team “Tsunami”"
                    imageAlignment="left"
                    style="black"
                    title="11 de julio del 2023"
                    />
                <Moment 
                    image={image_12__2023_07_24}
                    content="Se hace la sesión de fotos para la promoción del show debut “Tsunami”"
                    imageAlignment="right"
                    style="black"
                    title="24 de julio del 2023"
                    />
                <Moment 
                    image={image_13__2023_07_26}
                    content="Clase especial con la maestra Nelly Garcia"
                    imageAlignment="left"
                    style="black"
                    title="26 de julio del 2023"
                    />
                
                <Thread 
                    className="
                    top-0
                    left-0
                    w-full
                    h-full
                    absolute
                    pointer-events-none
                    "
                    />
            </div>
        </section>
    );
}
