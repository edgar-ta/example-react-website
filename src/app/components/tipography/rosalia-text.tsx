import TextSize from "./text-size";

export default function(props: { 
    children: Readonly<React.ReactNode>,
    className?: string,
    size: TextSize
}) {
    return (
        <p 
        data-size={props.size}

        className={`
        font-rosalia

        [&[data-size="md"]]:sm:text-md
        [&[data-size="md"]]:md:text-xl
        [&[data-size="md"]]:lg:text-2xl

        [&[data-size="lg"]]:text-2xl
        [&[data-size="lg"]]:sm:text-4xl
        [&[data-size="lg"]]:md:text-6xl
        [&[data-size="lg"]]:lg:text-8xl

        ${props.className}
        `}>
            {props.children}
        </p>
    );
}