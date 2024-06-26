import { StaticImageData } from "next/image";
import Image from "next/image";
import MontserratText from "@/app/components/tipography/montserrat-text";
import RosaliaTitle from "../tipography/rosalia-title";
import RosaliaText from "../tipography/rosalia-text";
import HorizontalPadding from "../utils/horizontal-padding";
import EventMarker from "./event-marker";

export default function(
    props: {
        year: number,
        month: "ene" | "feb" | "mar" | "abr" | "may" | "jun" | "jul" | "ago" | "sep" | "oct" | "nov" | "dic",
        imageOrientation: "left" | "right",
        image: StaticImageData,
        alt?: string,
        description: string,
        style: "black" | "white"
    }
) {
    const imageAspectRatio = props.image.height / props.image.width;
    const imageType = imageAspectRatio > 1 ? "taller" : "wider";

    return (
        <HorizontalPadding 
        data-image-orientation={props.imageOrientation}
        data-style={props.style}

        className="
        grid
        grid-cols-2
        grid-rows-[repeat(2,_auto)]
        
        sm:grid-cols-2
        sm:grid-rows-[repeat(2,_auto)]
        gap-8

        group
        ">
            <div className="
            row-start-2
            group-[&[data-image-orientation='right']]:col-start-1
            group-[&[data-image-orientation='left']]:col-start-2

            
            sm:row-start-1
            
            h-full
            w-full
            relative
            ">
                <RosaliaTitle 
                size="lg"
                className="
                group-[&[data-image-orientation='right']]:text-right
                group-[&[data-image-orientation='left']]:text-left
                uppercase
                text-transparent
                pointer-events-none
                leading-[1]
                "
                >
                    {props.month}
                </RosaliaTitle>
                <RosaliaTitle 
                size="lg"
                className="
                group-[&[data-image-orientation='right']]:text-right
                group-[&[data-image-orientation='left']]:text-left

                group-[&[data-image-orientation='right']]:right-0
                group-[&[data-image-orientation='left']]:left-0
                top-0
                absolute
                uppercase
                group-[&[data-style='white']]:text-white
                group-[&[data-style='black']]:text-black
                leading-[1]
                "
                >
                    {props.month}
                </RosaliaTitle>
                <RosaliaText 
                    size="lg"
                    className="
                    group-[&[data-image-orientation='right']]:text-right
                    group-[&[data-image-orientation='left']]:text-left

                    leading-[1]
                    group-[&[data-style='white']]:text-white
                    group-[&[data-style='black']]:text-black
                    "
                    >
                    {props.year}
                </RosaliaText>
            </div>
            <div className="
            group-[&[data-image-orientation='right']]:justify-self-start
            group-[&[data-image-orientation='left']]:justify-self-end

            aspect-square
            relative
            overflow-hidden

            w-full
            col-span-2
            
            sm:col-start-auto
            sm:col-end-auto
            sm:row-start-auto
            sm:row-end-auto
            
            sm:w-auto
            sm:h-[16rem]
            md:h-[18rem]
            lg:h-[20rem]
            xl:h-[24rem]
            ">
                <Image 
                    data-image-type={imageType}
                    className="
                    xs:w-full

                    absolute
                    sm:[&[data-image-type='taller']]:w-full
                    sm:[&[data-image-type='taller']]:h-auto
                    sm:[&[data-image-type='taller']]:max-h-none
                    sm:[&[data-image-type='wider']]:h-full
                    sm:[&[data-image-type='wider']]:w-auto
                    sm:[&[data-image-type='wider']]:max-w-none

                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    "
                    src={props.image} 
                    alt={props.alt ?? ""} />
            </div>
            <MontserratText 
                size="md"
                className="

                group-[&[data-image-orientation='right']]:col-start-2
                group-[&[data-image-orientation='right']]:text-left

                group-[&[data-image-orientation='left']]:col-start-1
                group-[&[data-image-orientation='left']]:text-right

                group-[&[data-style='white']]:text-white
                group-[&[data-style='black']]:text-black
                "
                >
                {props.description}
            </MontserratText>
            <EventMarker 
                className="
                w-full
                col-span-2
                "
                />
        </HorizontalPadding>
    );
}

