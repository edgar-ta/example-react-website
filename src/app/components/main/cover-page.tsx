import Image from "next/image";
import HugeTitle from "@/app/components/utils/huge-title";
import CtaButton from "@/app/components/main/cta-button";

import portada from "/public/images/portada.png"


export default function() {
    return (
        <section className="
        relative
        ">
          <Image 
            src={portada}
            alt="Bailarines de The House of Blues" 
            />
          <div className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          ">
            <HugeTitle className="
            text-white
            ">
              THE HOUSE OF BLUES
            </HugeTitle>
            <CtaButton className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            "/>
          </div>
        </section>
    );
}
