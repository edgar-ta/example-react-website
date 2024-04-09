import TextSize from "./text-size";

export default function(
    props: { 
        children: Readonly<React.ReactNode>,
        color?: "black" | "white",
        transparent?: "yes" | "no",
        size: TextSize,
        className?: string,
    }
) {

    return (
        <p 
        data-color={props.color} 
        data-transparent={props.transparent}
        data-size={props.size}
        
        className={
        `
        text-white
        [&[data-color="black"]]:text-black

        text-opacity-50
        [&[data-transparent="no"]]:text-opacity-100

        [&[data-size="md"]]:md:text-base
        [&[data-size="md"]]:lg:text-lg
        [&[data-size="md"]]:xl:text-lg

        [&[data-size="lg"]]:md:text-xl
        [&[data-size="lg"]]:lg:text-2xl
        [&[data-size="lg"]]:xl:text-4xl

        text-center
        font-courier
        ${props.className}
        `
        }>
            {props.children}
        </p>
    );
}
