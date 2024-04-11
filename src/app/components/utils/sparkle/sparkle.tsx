import Image from "next/image";

import sparkle from "./sparkle.svg";

export default function(
    props: {
        className: string,
        size: "sm" | "md" | "lg"
    }
) {
    return (
        <Image 
            data-size={props.size}
            alt="Imagen de una estrella"
            src={sparkle}
            className={`
            [&[data-size='sm']]:w-24
            [&[data-size='md']]:w-32
            [&[data-size='lg']]:w-40
            
            aspect-square
            ${props.className}
            `}
            />
    );
}


