import Image from "next/image";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";

import portada from "/public/images/portada.png"
import Menu from "../menu/menu";
import MontserratText from "../tipography/montserrat-text";


export default function() {
    return (
        <section className="
        h-screen
        relative
        w-screen
        overflow-hidden
        "
        >
          <Image src={portada} alt="Miembros de The House of Blues" 
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          max-w-none
          max-h-none

          hidden
          h-full
          w-auto

          lg:block
          "
          />

          <Image src={portada} alt="Miembros de The House of Blues" 
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          max-w-none
          max-h-none

          w-auto
          h-full

          lg:w-full
          lg:h-auto
          "
          />

          <Menu className="
          absolute
          top-0
          "/>
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
              <span className="
              text-4xl 
              xs:text-5xl 
              sm:text-5xl 
              md:[font-size:_inherit]
              ">
                THE 
              </span>
              <span className="inline md:hidden"><br/></span> 
              <span className="hidden md:inline">&nbsp;</span> 
              <span className="
              text-7xl 
              xs:text-8xl 
              sm:text-8xl 
              md:[font-size:_inherit]
              ">
                HOUSE 
              </span>
              <span className="inline md:hidden"><br/></span> 
              <span className="hidden md:inline">&nbsp;</span> 
              <span className="
              text-7xl 
              xs:text-8xl 
              sm:text-8xl 
              md:[font-size:_inherit]
              ">
                OF BLUES
              </span>
            </RosaliaTitle>
            <div className="
            flex
            absolute
            top-[120%]
            w-full
            md:hidden
            ">

            </div>
          </div>
        </section>
    );
}
