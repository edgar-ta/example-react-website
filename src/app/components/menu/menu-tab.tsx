import Link from "next/link";
import CourierText from "@/app/components/tipography/courier-text";
import CourierTitle from "@/app/components/tipography/courier-title";

export default function(
    props: { 
        children: Readonly<React.ReactNode>,
        href: string
    }
) {


    return (
        <li className="
        md:h-full
        ">
            <Link 
                href={props.href}
                className="
                flex
                flex-col
                justify-center
                transition
                group

                md:h-full
                md:px-6
                md:py-1

                lg:px-8
                lg:py-2
                "
                >
                    <CourierText 
                        color="white" 
                        transparent="no"
                        size="md"
                        className="
                        hidden
                        md:inline-block

                        relative

                        before:absolute
                        before:top-full
                        before:left-1/2
                        before:-translate-x-1/2
                        before:h-[1px]
                        before:bg-white
                        before:w-0
                        before:transition-all

                        group-hover:before:w-full
                        "
                        >
                        {props.children}
                    </CourierText>
                    <CourierTitle 
                    size="lg"
                    className="
                    inline-block
                    md:hidden
                    "
                    >
                        {props.children}
                    </CourierTitle>
            </Link>
        </li>
    );
}
