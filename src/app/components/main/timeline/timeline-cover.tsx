import MontserratText from "../../tipography/montserrat-text";
import RosaliaTitle from "../../tipography/rosalia-title";
import ThbLogo from "../../utils/thb-logo/thb-logo";

export default function() {
    return (
        <div className="
        bg-black
        text-white
        min-h-[50vh]
        lg:min-h-screen
        xs:py-16
        lg:py-32

        flex
        flex-col
        gap-y-8

        lg:grid
        lg:grid-cols-2
        lg:grid-rows-2
        lg:gap-x-8

        justify-center
        items-center

        px-2
        xs:px-4
        sm:px-24
        md:px-40
        lg:px-38
        xl:px-48

        relative
        ">
            <RosaliaTitle size="sm" className="
            w-full
            lg:col-span-2
            text-left
            md:text-center
            ">
                Vivimos creando nuestro mundo
            </RosaliaTitle>
            <MontserratText size="md">
                The House of Blues es una compañía de baile enfocada en la creación de bailarines multidisciplinarios dentro del ámbito del show business en México, que busca promover la buena salud mental y física, así como la filantropía a través del baile contemporáneo. Su contribución social se centra en fomentar la conciencia sobre la importancia del bienestar emocional y físico a través de la danza, al mismo tiempo que busca hacer visible el arte del baile contemporáneo a nivel estatal y próximamente nacional. 
            </MontserratText>
            <ThbLogo className="
            w-48
            xs:w-56
            sm:w-64
            md:w-72
            lg:w-80
            xl:w-88

            md:justify-self-center
            " />
        </div>
    );
}
