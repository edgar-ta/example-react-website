
export default function(
    props: {
        children: Readonly<React.ReactNode>
    }
) {
    return (
        <div className="
        flex
        flex-col
        w-full
        h-full
        justify-center
        items-center
        ">
            {props.children}
        </div>
    );
}
