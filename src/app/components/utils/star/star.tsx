import Image from "next/image"

import star from "./star.svg";

type StarSize = "sm" | "md" | "lg";

const widths: { [ key in StarSize ]: number } = {
    sm: 25,
    md: 80,
    lg: 160
};

export default function(props: { className: string, starSize?: StarSize }) {
    const width = widths[props.starSize ?? "sm"];

    return (
        <Image 
            src={star}
            alt="Estrella"
            width={width}
            className={props.className}
        />
    );
}