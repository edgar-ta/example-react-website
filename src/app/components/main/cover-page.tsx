import Image from "next/image";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";

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
            <RosaliaTitle size="md" className="
            w-max
            text-white
            ">
              THE HOUSE OF BLUES
            </RosaliaTitle>
          </div>
        </section>
    );
}
