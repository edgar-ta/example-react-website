import Footer from "./components/footer/footer";
import CoverPage from "./components/utils/cover-page/cover-page";
import ThreeWordArrangement from "./components/utils/three-word-arrangement/three-word-arrangement";

import image from "@/app/components/main/timeline/images/1--2022-10.png"

export default function() {
    return (
        <>
            <CoverPage image={image} alt="Página no encontrada" hasMenu={false}>
                <ThreeWordArrangement
                    firstWord="ALGO"
                    secondWord="SALIÓ"
                    thirdWord="MAL :("
                    />
            </CoverPage>
            <Footer />
        </>
    );
}

