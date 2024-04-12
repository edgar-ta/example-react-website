import Image, { StaticImageData } from "next/image";
import HorizontalPadding from "../utils/horizontal-padding";
import EventMarker from "./event-marker";
import CourierTitle from "../tipography/courier-title";
import MontserratText from "../tipography/montserrat-text";

export default function(
    props: {
        className?: string,
        title: string,
        content: string,
        image: StaticImageData, 
        style: "black" | "white",
        imageAlignment: "left" | "right"
    }
) {
    return (
        <HorizontalPadding
        data-style={props.style}
        data-image-alignment={props.imageAlignment}

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
                    {props.content}
                </MontserratText>
            </div>
            <div className="
                aspect-square
                sm:h-48
                md:h-56
                lg:h-64
                relative

                md:group-[&[data-image-alignment='left']]:justify-self-end
            ">
                <Image 
                    src={props.image}
                    alt={props.content}
                    className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
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
