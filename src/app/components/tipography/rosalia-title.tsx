import React from "react"
import TextSize from "./text-size"

export default function(props: Readonly<{
    children: React.ReactNode,
    className?: string,
    size: TextSize
}>) {
    return (
        <p 
        data-size={props.size}

        className={`
        font-rosalia 

        [&[data-size="md"]]:sm:text-6xl
        [&[data-size="md"]]:md:text-7xl
        [&[data-size="md"]]:lg:text-8xl
        [&[data-size="md"]]:xl:text-9xl

        [&[data-size="lg"]]:text-[4rem]
        [&[data-size="lg"]]:xs:text-[6rem]
        [&[data-size="lg"]]:sm:text-[8rem]
        [&[data-size="lg"]]:md:text-[10rem]
        [&[data-size="lg"]]:lg:text-[14rem]
        [&[data-size="lg"]]:xl:text-[16rem]
        ${props.className}`
        }>
            { props.children }
        </p>
    )
}
