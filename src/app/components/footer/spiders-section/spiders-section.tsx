import Image from "next/image";
import ContributorTab from "./contributor-tab";

import spidersLogo from "./spiders-logo.png";

export default function() {
    return (
        <div className="
        grid
        grid-rows-1
        grid-cols-[repeat(5,_1fr)]
        divide-x
        divide-black
        h-max
        px-32
        py-8
        ">
            <ContributorTab contributorName="carlos" />
            <ContributorTab contributorName="edgar" />
            <a href="mailto:spiders.devteam@google.com" className="
            w-full
            h-full
            flex
            justify-center
            items-center
            ">
                <Image src={spidersLogo} alt="Logo de la empresa Spiders"/>
            </a>
            <ContributorTab contributorName="leo" />
            <ContributorTab contributorName="uli" />
        </div>
    );
}