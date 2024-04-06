import Image from "next/image";
import HugeTitle from "./components/utils/huge-title";

import portada from "/public/images/portada.png"
import CtaButton from "./components/main/cta-button";
import Milestone from "./components/main/milestone";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
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
      <section className="bg-white">
        <Milestone 
          year={2022}
          month="dec"
          image={portada}
          alt="Something"
          description="In the old year of 2022, something happened"
          />
      </section>
      <Footer />
    </>
  );
}
