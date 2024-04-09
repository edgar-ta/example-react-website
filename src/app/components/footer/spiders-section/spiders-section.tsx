import Image from "next/image";
import ContributorTab from "./contributor-tab";

import spidersLogo from "./spiders-logo.png";

export default function() {
    return (
        <div className="
        grid

        grid-cols-4
        grid-rows-2

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
            justify-center
            items-center
            
            row-start-2
            row-end-3
            col-start-1
            col-end-5
            h-8

            md:w-full
            md:h-full
            
            lg:row-start-auto
            lg:row-end-auto
            lg:col-start-auto
            lg:col-end-auto
            ">
                <Image 
                    src={spidersLogo} alt="Logo de la empresa Spiders"
                    className="max-w-full max-h-full"
                    />
            </a>
            <ContributorTab contributorName="leo" />
            <ContributorTab contributorName="uli" />
        </div>
    );
}