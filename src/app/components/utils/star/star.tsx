import Image from "next/image"

import star from "./star.svg";

export default function(props: { className: string, starSize: "sm" | "md" | "lg" }) {
    return (
        <Image 
            data-size={props.starSize}
            src={star}
            alt="Estrella"
            className={`

            [&[data-size="sm"]]:w-[15px]
            [&[data-size="sm"]]:xs:w-[20px]
            [&[data-size="sm"]]:sm:w-[20px]
            [&[data-size="sm"]]:md:w-[25px]

            [&[data-size="md"]]:w-[20px]
            [&[data-size="md"]]:xs:w-[40px]
            [&[data-size="md"]]:sm:w-[60px]
            [&[data-size="md"]]:md:w-[80px]

            [&[data-size="lg"]]:w-[60px]
            [&[data-size="lg"]]:xs:w-[80px]
            [&[data-size="lg"]]:sm:w-[120px]
            [&[data-size="lg"]]:md:w-[160px]

            ${props.className}
            `}
        />
    );
}