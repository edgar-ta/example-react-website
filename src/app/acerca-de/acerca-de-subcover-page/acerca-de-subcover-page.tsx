import CoverPage from "@/app/components/utils/cover-page/cover-page";

import nuestrosBailarines from "./nuestros-bailarines.png";
import ThreeWordArrangement from "@/app/components/utils/three-word-arrangement/three-word-arrangement";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";

export default function() {
    return (
        <CoverPage
        image={nuestrosBailarines}
        alt="Bailarines de The House of Blues"
        hasMenu={false}
        >
            <RosaliaTitle size="md">
                NUESTROS <br/> BAILARINES
            </RosaliaTitle>
        </CoverPage>
    );
}

