type TextSize = "md" | "lg";

const styling: { [ key in TextSize ]: string } = {
    "md": "text-md",
    "lg": "text-xl"
};

export default function(props: { 
    children: Readonly<React.ReactNode>,
    className?: string,
    textSize?: TextSize
}) {
    const textSize: TextSize = props.textSize ?? "md";
    const localStyling = styling[textSize];

    return (
        <p className={`
        font-rosalia
        text-center
        ${localStyling}
        ${props.className}
        `}>
            {props.children}
        </p>
    );
}