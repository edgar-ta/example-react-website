import Image from "next/image";

import RosaliaText from "../../utils/rosalia-text";
import CourierText from "../../utils/courier-text";
import Star from "../../utils/star/star";

import curvedLine from "./curved-line.svg";
import ThbLogo from "../../utils/thb-logo/thb-logo";

export default function() {
    return (
        <div className="
        bg-black
        flex
        flex-col
        items-center
        space-y-4
        py-16
        relative
        ">
            <CourierText size="md">
                Av. Río Moctezuma no. 43, intersección A con B, San Juan del Río, Querétaro, México.
            </CourierText>
            <ThbLogo />
            <RosaliaText className="text-white" size="lg">
                VIVIMOS CREANDO NUESTRO MUNDO
            </RosaliaText>
            <CourierText size="md">
                Copyright &copy; The House of Blues, 2024
            </CourierText>

            <Image 
                alt="Línea curveada"
                src={curvedLine}
                className="
                absolute
                top-0
                left-0
                w-full
                h-full
                pointer-events-none
                "
                />

            <Star className="
            absolute 
            left-[10%]
            top-[40%]
            "
            starSize="md"
            />
            <Star className="
            absolute 
            left-[15%]
            top-[75%]
            "
            starSize="lg"
            />
            <Star className="
            absolute 
            left-[20%]
            top-[20%]
            "
            starSize="sm"
            />
            <Star className="
            absolute 
            left-[25%]
            top-[40%]
            "
            starSize="md"
            />
            <Star className="
            absolute 
            left-[30%]
            top-[30%]
            "
            starSize="md"
            />
            <Star className="
            absolute 
            left-[65%]
            top-[50%]
            "
            starSize="lg"
            />
            <Star className="
            absolute 
            left-[70%]
            top-[25%]
            "
            starSize="sm"
            />
            <Star className="
            absolute 
            left-[75%]
            top-[45%]
            "
            starSize="md"
            />
            <Star className="
            absolute 
            left-[85%]
            top-[55%]
            "
            starSize="md"
            />
        </div>
    );
}