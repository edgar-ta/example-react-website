import { StaticImageData } from "next/image";
import Image from "next/image";
import RosaliaTitle from "../components/tipography/rosalia-title";
import CourierLabel from "../components/tipography/courier-label";

export default function(
    props: {
        name: string,
        charge: string,
        children: Readonly<React.ReactNode>,
        image: StaticImageData,
    }
) {
    return (
        <div className="
        w-full
        aspect-[3_/_4]
        rounded-3xl
        relative
        p-8
        shadow-sm
        flex
        flex-col
        items-stretch
        cursor-pointer
        overflow-hidden
        ">
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
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-4/5
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
            {
                props.children !== undefined &&
                <div className="
                border-t
                border-t-white
                border-opacity-50
                justify-self-end
                ">
                    {props.children}
                </div>
            }
        </div>
    );
}

