import { StaticImageData } from "next/image";
import Image from "next/image";

interface MilestoneProps {
    year: number,
    month: "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec",
    image: StaticImageData,
    alt: string,
    description: string
};

export default function(props: MilestoneProps) {
    return (
        <div className="
        w-screen
        px-[8rem]
        py-[3.125rem]
        flex
        flex-col
        items-center
        gap-[3.75rem]
        ">
            <div className="
            grid
            grid-rows-[repeat(2,_auto)]
            grid-cols-2
            gap-[3.75rem]
            ">
                <div className="
                w-full
                h-full
                flex
                flex-col
                -space-y-16
                ">
                    <p className="
                    text-right
                    font-rosalia
                    text-[17.5rem]
                    uppercase
                    ">
                        {props.month}
                    </p>
                    <p className="
                    text-right
                    font-rosalia
                    text-[5.25rem]
                    leading-[1]
                    ">
                        {props.year}
                    </p>
                </div>
                <Image 
                    src={props.image} 
                    alt={props.alt} 
                    width={300}
                    height={300}
                    className="
                    w-full
                    h-full
                    "
                    />
                <p className="
                col-start-2
                col-end-3
                ">{props.description}</p>
            </div>
            <div className="
            aspect-square
            h-[3.125rem]
            bg-[#D9D9D9]
            bg-opacity-20
            rounded-full
            "></div>
        </div>
    );
}

