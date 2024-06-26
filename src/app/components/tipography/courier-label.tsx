import TextSize from "./text-size";

export default function(
    props: { 
        children: Readonly<React.ReactNode>, 
        className?: string,
        size: TextSize
    }
) {
    return (
        <p 
        data-size={props.size}

        className={`

        [&[data-size="md"]]:text-xs
        [&[data-size="md"]]:sm:text-xs
        [&[data-size="md"]]:md:text-xs
        [&[data-size="md"]]:lg:text-sm

        [&[data-size="lg"]]:text-xl
        [&[data-size="lg"]]:sm:text-xl
        [&[data-size="lg"]]:md:text-xl
        [&[data-size="lg"]]:lg:text-2xl

        font-courier
        uppercase
        text-xs
        ${props.className}
        `}
        >
            {props.children}
        </p>
    );
}