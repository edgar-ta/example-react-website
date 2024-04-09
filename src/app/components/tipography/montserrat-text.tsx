import TextSize from "./text-size";

export default function(
    props: {
        children: Readonly<React.ReactNode>,
        size: TextSize,
        className?: string
    }
) {
    return (
        <p className={`
        font-montserrat
        ${props.className}
        `}>
            {props.children}
        </p>
    );
}


