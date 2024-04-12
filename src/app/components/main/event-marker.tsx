
export default function(
    props: {
        className?: string
    }
) {
    return (
        <div className={`
        relative

        h-4
        before:h-full

        xs:h-8

        lg:h-10

        before:absolute
        before:aspect-square
        before:top-0
        before:left-1/2
        before:-translate-x-1/2
        before:rounded-full
        before:bg-black
        before:bg-opacity-50

        ${props.className}
        `}></div>
    );
}
