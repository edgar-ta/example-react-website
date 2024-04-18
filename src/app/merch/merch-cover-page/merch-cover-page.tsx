import CoverPage from "@/app/components/utils/cover-page/cover-page";
import primerShow from "./primer-show.png";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";

export default function() {
    return (
        <CoverPage 
            alt="Primer show the The House of Blues"
            image={primerShow}
            hasMenu={true}
            translate="no"
        >
            <RosaliaTitle size="md">
                PRÓXIMAMENTE
            </RosaliaTitle>
        </CoverPage>
    );
}
