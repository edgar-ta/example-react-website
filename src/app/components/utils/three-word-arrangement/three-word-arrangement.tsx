
export default function(
    props: {
        firstWord: string,
        secondWord: string,
        thirdWord: string,
    }
) {
    return (
        <>
            <span className="
            text-4xl 
            xs:text-5xl 
            sm:text-5xl 
            md:[font-size:_inherit]
            ">
                {props.firstWord}
            </span>
            <span className="inline md:hidden"><br/></span> 
            <span className="hidden md:inline">&nbsp;</span> 
            <span className="
            text-7xl 
            xs:text-8xl 
            sm:text-8xl 
            md:[font-size:_inherit]
            ">
                {props.secondWord}
            </span>
            <span className="inline md:hidden"><br/></span> 
            <span className="hidden md:inline">&nbsp;</span> 
            <span className="
            text-7xl 
            xs:text-8xl 
            sm:text-8xl 
            md:[font-size:_inherit]
            ">
                {props.thirdWord}
            </span>
        </>
    );
}
