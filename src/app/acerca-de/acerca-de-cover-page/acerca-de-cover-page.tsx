import CoverPage from "@/app/components/utils/cover-page/cover-page";

import equipoDeTheHouseOfBlues from "./equipo-de-the-house-of-blues.jpg";
import ThreeWordArrangement from "@/app/components/utils/three-word-arrangement/three-word-arrangement";

export default function() {
    return (
        <CoverPage
            image={equipoDeTheHouseOfBlues}
            alt="Equipo de The House of Blues"
            hasMenu={true}
            translate="no"
        >
            <ThreeWordArrangement 
                firstWord="MEET"
                secondWord="THE"
                thirdWord="TEAM"
            />
        </CoverPage>
    );
}
