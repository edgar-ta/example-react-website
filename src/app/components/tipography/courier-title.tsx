import TextSize from "./text-size";

export default function(
    props: {
        children: Readonly<React.ReactNode>,
        size: TextSize,
        color?: "black" | "white",
        className?: string
    }
) {
    return (
        <p 
        data-size={props.size}
        data-color={props.color} 

        
        className={`
        font-courier

        text-white
        [&[data-color="black"]]:text-black

        [&[data-size="lg"]]:text-3xl
        [&[data-size="lg"]]:sm:text-5xl
        [&[data-size="lg"]]:md:text-6xl
        [&[data-size="lg"]]:lg:text-6xl

        ${props.className}
        `}>
            {props.children}
        </p>
    );
}
