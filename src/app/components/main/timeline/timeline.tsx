import Milestone from "../milestone";

import image_2022_10 from "./2022-10.png";
import image_2022_11 from "./2022-11.png";
import image_2023_01 from "./2023-01.png";
import image_2023_04 from "./2023-04.png";
import Thread from "./thread";
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
            ">
                <Milestone 
                    image={image_2022_10}
                    description="Primera reunión con todo el team de producción; se crea la compañía"
                    imageOrientation="right"
                    month="oct"
                    year={2022}
                    alt="Fotografía de los directivos de THB"
                    style="white"
                    />
                <Milestone 
                    image={image_2022_11}
                    description="Primer show de la compañía en el municipio de Ezequiel Montes"
                    imageOrientation="right"
                    month="nov"
                    year={2022}
                    alt="Fotografía de los directivos de THB"
                    style="white"
                    />
                <Milestone 
                    image={image_2023_01}
                    description="Junto al equipo de producción comenzamos con los preparativos del show debut de la compañía, “TSUNAMI”"
                    imageOrientation="right"
                    month="jan"
                    year={2023}
                    alt="Fotografía de los directivos de THB"
                    style="black"
                    />
                <Milestone 
                    image={image_2023_04}
                    description="Se hace oficial el anuncio de la compañía “The House of Blues”"
                    imageOrientation="left"
                    month="apr"
                    year={2023}
                    alt="Fotografía de los directivos de THB"
                    style="black"
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
