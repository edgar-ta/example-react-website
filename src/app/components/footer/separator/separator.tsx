import separator from "./separator.svg"
import Image from "next/image";

export default function(
    props: {
        className?: string
    }
) {
    return <Image 
        src={separator} 
        width={1920}
        height={1080}
        alt="Separador entre secciones"
        className={`
        bg-[linear-gradient(to_bottom,_transparent,_transparent_99%,_black_99%)]
        ${props.className}
        `}
        />;
}
