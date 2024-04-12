export default function(
    props: {
        children?: Readonly<React.ReactNode>,
        className?: string
    } 
) {
    const { children, className, ...everythingElse } = props;
    return (
        <div className={`
        px-2
        xs:px-4
        sm:px-16
        md:px-40
        lg:px-38
        xl:px-48

        ${className}
        `}
        {...everythingElse}
        >
            {children}
        </div>
    );
}

