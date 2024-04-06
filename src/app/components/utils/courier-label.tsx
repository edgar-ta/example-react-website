export default function(props: { children: Readonly<React.ReactNode>, className: string | undefined }) {
    return (
        <p className={`
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