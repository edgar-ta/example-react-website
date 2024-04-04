import React from "react"

export default function(props: Readonly<{
    children: React.ReactNode,
    className: string
}>) {
    return (
        <p className={`font-rosalia lg:text-[2rem] xl:text-[8rem] w-max ${props.className}`}>
            { props.children }
        </p>
    )
}
