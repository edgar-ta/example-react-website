import Image from "next/image";

import thbLogo from "./thb-logo.svg";

export default function(props: { className?: string, style?: "black" | "white" }) {
    // Got it from this StackOverflow question:
    // https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element
    // 
    // I am aware that I can just create a separate SVG file that contains a different
    // black color, or simply paste the SVG as a React component, but I think
    // this approach is a little more efficient; I might be wrong, though

    const filter = "brightness(0) saturate(100%)";

    return (
        <Image 
            src={thbLogo}
            alt="Logo de The House of Blues"
            className={props.className}
            style={
                props.style == "black" ? { filter } : {}
            }
        />
    );
}
