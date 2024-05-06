import { Suspense } from "react";
import HorizontalPadding from "../../utils/horizontal-padding";

async function VideoComponent() {
    return (
        <div className="
        aspect-[9_/_16]
        w-full
        h-auto
        md:w-2/3
        md:h-auto
        relative
        bg-black
        ">
            <Suspense fallback={
                <div>
                    Cargando video
                </div>
            }>
                <video loop controls preload="none" aria-label="Video player" 
                className="
                absolute
                top-0
                left-0
                max-w-none
                max-h-none
                w-full
                h-auto
                aspect-[9_/_16]
                ">
                    <source src="/thb-video.mp4" type="video/mp4"/>
                    Tu navegador no soporta este tipo de contenido :&lpar;
                </video>
            </Suspense>
        </div>
    );
}

export default function() {
    return (
        <HorizontalPadding className="flex justify-center">
            <VideoComponent />
        </HorizontalPadding>
    );
}
