import Image from "next/image";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";

import portada from "/public/images/portada.png"
import Menu from "../menu/menu";
import MontserratText from "../tipography/montserrat-text";
import CoverPage from "../utils/cover-page/cover-page";
import ThreeWordArrangement from "../utils/three-word-arrangement/three-word-arrangement";


export default function() {
    return (
      <CoverPage 
        image={portada}
        alt="Miembros de The House of Blues"
        hasMenu={true}
        translate="no"
        >
          <ThreeWordArrangement 
          firstWord="THE"
          secondWord="HOUSE"
          thirdWord="OF BLUES"
          />
      </CoverPage>
    );
}
