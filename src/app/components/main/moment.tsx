import Image, { StaticImageData } from "next/image";
import HorizontalPadding from "../utils/horizontal-padding";
import EventMarker from "./event-marker";
import CourierTitle from "../tipography/courier-title";
import MontserratText from "../tipography/montserrat-text";

export default function(
    props: {
        className?: string,
        title: string,
        description: string,
        image: StaticImageData, 
        style: "black" | "white",
        imageOrientation: "left" | "right"
    }
) {
    const imageAspectRatio = props.image.height / props.image.width;
    const imageType = imageAspectRatio > 1 ? "taller" : "wider";

    return (
        <HorizontalPadding
        data-style={props.style}
        data-image-alignment={props.imageOrientation}

        className={`
        grid
        grid-cols-[1fr_1fr]
        grid-rows-[auto_auto]
        gap-8

        group

        ${props.className}
        `}>
            <div className="
            group-[&[data-image-alignment='right']]:col-start-1
            group-[&[data-image-alignment='left']]:col-start-2

            row-start-1
            flex
            flex-col
            w-full
            gap-8
            ">
                <CourierTitle size="md"
                className="
                group-[&[data-style='black']]:text-black
                group-[&[data-style='white']]:text-white
                uppercase
                "
                >
                    {props.title}
                </CourierTitle>
                <MontserratText size="md"
                className="
                group-[&[data-style='black']]:text-black
                group-[&[data-style='white']]:text-white
                "
                >
                    {props.description}
                </MontserratText>
            </div>
            <div className="
                aspect-square
                sm:h-48
                md:h-56
                lg:h-64
                relative
                overflow-hidden

                md:group-[&[data-image-alignment='left']]:justify-self-end
            ">
                <Image 
                    src={props.image}
                    alt={props.description}
                    data-image-type={imageType}
                    className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2

                    sm:[&[data-image-type='taller']]:w-full
                    sm:[&[data-image-type='taller']]:max-h-none
                    sm:[&[data-image-type='taller']]:h-auto
                    sm:[&[data-image-type='wider']]:h-full
                    sm:[&[data-image-type='wider']]:w-auto
                    sm:[&[data-image-type='wider']]:max-w-none
                    "
                    />
            </div>
            <EventMarker 
                className="
                w-full
                col-span-2
                "
                />
        </HorizontalPadding>
    );
}
