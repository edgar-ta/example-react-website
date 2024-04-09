export default function(props: { 
    children: Readonly<React.ReactNode>,
    className?: string,
    size: "sm" | "md" | "lg"
}) {
    return (
        <p 
        data-size={props.size}

        className={`
        font-rosalia
        text-center

        [&[data-size="md"]]:sm:text-md
        [&[data-size="md"]]:md:text-md
        [&[data-size="md"]]:lg:text-lg

        [&[data-size="lg"]]:sm:text-md
        [&[data-size="lg"]]:md:text-xl
        [&[data-size="lg"]]:lg:text-2xl

        ${props.className}
        `}>
            {props.children}
        </p>
    );
}