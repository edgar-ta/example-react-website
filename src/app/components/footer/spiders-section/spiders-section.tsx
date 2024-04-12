import Image from "next/image";
import ContributorTab from "./contributor-tab";

import spidersLogo from "./spiders-logo.png";

export default function() {
    return (
        <div className="
        grid
        grid-cols-2
        grid-rows-3

        sm:grid-cols-4
        sm:grid-rows-2

        lg:grid-rows-1
        lg:grid-cols-[repeat(5,_1fr)]
        lg:divide-x
        lg:divide-black
        lg:h-max
        lg:px-32
        lg:py-8
        ">
            <ContributorTab 
                contributorName="carlos"/>
            <ContributorTab contributorName="edgar" />
            <a href="mailto:spiders.devteam@google.com" className="
            flex
            flex-col
            justify-center
            items-center

            h-full
            w-full
            col-start-1
            col-end-3
            row-start-3
            row-end-4
            
            sm:row-start-2
            sm:row-end-3
            sm:col-start-1
            sm:col-end-5

            md:w-full
            md:h-full
            
            lg:row-start-auto
            lg:row-end-auto
            lg:col-start-auto
            lg:col-end-auto
            ">
                <Image 
                    src={spidersLogo} alt="Logo de la empresa Spiders"
                    className="
                    max-w-full 
                    max-h-full
                    "
                    />
            </a>
            <ContributorTab contributorName="leo" />
            <ContributorTab contributorName="uli" />
        </div>
    );
}