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

import image_16__2023_08_16 from "./images/16--2023-08-16.jpg";
import image_17__2023_09_02 from "./images/17--2023-09-02.jpg";
import image_18__2023_11_12 from "./images/18--2023-11-12.jpg";
import image_19__2023_12_01 from "./images/19--2023-12-01.jpg";
import image_20__2023_12_17 from "./images/20--2023-12-17.jpg";
import image_21__2024_02_02 from "./images/21--2024-02-02.jpg";

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
                    description="Primer entrenamiento de la compañía a cargo de la maestra Sam Contreras"
                    imageOrientation="right"
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
                    description="Entrenamiento a cargo de la maestra Amber Limbs"
                    imageOrientation="left"
                    style="white"
                    title="26 de noviembre del 2022"
                    />
                <Moment 
                    image={image_6__2022_12_17}
                    description="Cierre de actividades de la compañía “Mercadito Emprendedor” en San Juan del Río"
                    imageOrientation="left"
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
                    style="white"
                    />
                <Moment 
                    image={image_8__2023_01_14}
                    description="Arranque del primer semestre oficial de la compañía"
                    imageOrientation="left"
                    style="white"
                    title="14 de enero del 2023"
                    />
                <Moment 
                    image={image_9__2023_04_20}
                    description="Se hace la primera sesión de fotos con el concepto de “The House of Blues”"
                    imageOrientation="right"
                    style="white"
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
                    description="Se inician los ensayos generales con todos los miembros del team “Tsunami”"
                    imageOrientation="left"
                    style="black"
                    title="11 de julio del 2023"
                    />
                <Moment 
                    image={image_12__2023_07_24}
                    description="Se hace la sesión de fotos para la promoción del show debut “Tsunami”"
                    imageOrientation="right"
                    style="black"
                    title="24 de julio del 2023"
                    />
                <Moment 
                    image={image_13__2023_07_26}
                    description="Clase especial con la maestra Nelly Garcia"
                    imageOrientation="left"
                    style="black"
                    title="26 de julio del 2023"
                    />
                <Milestone 
                    image={image_16__2023_08_16}
                    description="Se anuncia oficialmente “Tsunami” el show debut de The House of Blues y con ello las primeras dos fechas en el Portal del Diezmo, ambas siendo un total “Sold Out”"
                    imageOrientation="right"
                    style="black"
                    month="ago"
                    year={2023}
                    />
                <Moment 
                    image={image_17__2023_09_02}
                    imageOrientation="left"
                    description="Arranque el tour “Tsunami, 2023”, con un total de 14 fechas a lo largo de San Juan del Río"
                    style="black"
                    title="02 de septiembre del 2023"
                    />
                <Moment 
                    image={image_18__2023_11_12}
                    imageOrientation="right"
                    description="Aniversario de la compañía con una clase especial de la maestra Ximena Ortega”"
                    style="black"
                    title="12 de noviembre del 2023"
                    />
                <Moment 
                    image={image_19__2023_12_01}
                    imageOrientation="left"
                    description="The House of Blues es parte del musical “Navidad en Broadway” de la compañía de teatro “Vendaval”"
                    style="black"
                    title="01 de diciembre del 2023"
                    />
                <Moment 
                    image={image_20__2023_12_17}
                    imageOrientation="right"
                    description="cierre de actividades del año presente con la primer posada de la compañía"
                    style="black"
                    title="17 de diciembre del 2023"
                    />
                <Milestone
                    image={image_21__2024_02_02}
                    imageOrientation="left"
                    description="Postulación al premio municipal de la juventud en la categoría “arte y cultura”"
                    style="black"
                    month="feb"
                    year={2024}
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
