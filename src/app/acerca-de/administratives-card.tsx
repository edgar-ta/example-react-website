import { StaticImageData } from "next/image";
import Image from "next/image";
import RosaliaTitle from "../components/tipography/rosalia-title";
import CourierLabel from "../components/tipography/courier-label";

export default function(
    props: {
        name: string,
        charge: string,
        socialMedia: string,
        children?: Readonly<React.ReactNode>,
        image: StaticImageData,
    }
) {
    return (
        <a className="
        w-full
        aspect-[9_/_16]
        md:aspect-[3_/_4]
        rounded-3xl
        relative
        p-8
        shadow-lg
        flex
        flex-col
        items-stretch
        cursor-pointer
        overflow-hidden
        "
        href={props.socialMedia}
        target="_blank"
        >
            <Image 
                src={props.image}
                alt={`Fotografía de ${props.name}`}
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                h-full
                blur-sm
                "
                />
            <Image 
                src={props.image}
                alt={`Fotografía de ${props.name}`}
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-full
                "
                />
            <div className="
            absolute
            left-1/2
            top-2/3
            -translate-x-1/2
            -translate-y-1/2
            w-4/5
            z-20
            ">
                <CourierLabel 
                size="lg"
                className="
                text-center
                isolate
                text-white
                text-opacity-90
                absolute
                top-full
                w-full
                "
                >
                    {props.charge}
                </CourierLabel>
                <RosaliaTitle 
                size="sm"
                className="
                text-center
                text-white
                
                "
                >
                    {props.name}
                </RosaliaTitle>
            </div>
        </a>
    );
}

