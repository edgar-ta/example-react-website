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

        [&[data-size="md"]]:sm:text-xs
        [&[data-size="md"]]:md:text-xs
        [&[data-size="md"]]:lg:text-sm

        font-courier
        uppercase
        text-xs
        text-center
        ${props.className}
        `}
        >
            {props.children}
        </p>
    );
}