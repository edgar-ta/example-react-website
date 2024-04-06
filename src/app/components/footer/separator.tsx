import separator from "./separator.svg"
import Image from "next/image";

export default function() {
    return <Image 
        src={separator} 
        width={1920}
        height={1080}
        alt="Separator between sections"
        className="
        bg-[linear-gradient(to_bottom,_white,_white_99%,_black_99%)]
        "
        />;
}
