export default function(props: { children: Readonly<React.ReactNode> }) {
    return (
        <p className="
        text-white
        text-opacity-50
        w-max
        text-center
        font-courier
        ">
            {props.children}
        </p>
    );
}
