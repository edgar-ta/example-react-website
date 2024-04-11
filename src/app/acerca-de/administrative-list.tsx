import AdministrativeCard from "./administrative-card";

import brunoGonzalez from "./images/bruno-gonzalez.jpg";
import emmanuelDionet from "./images/emmanuel-dionet.jpg"
import jackGonzalez from "./images/jack-gonzalez.jpeg"
import jessGuarneros from "./images/jess-guarneros.jpg"
import daniePagola from "./images/danie-pagola.jpg"

export default function() {

    return (
        <div className="
        gap-2
        px-2

        grid
        grid-cols-[repeat(2,_1fr)]
        grid-rows-[1fr]
        h-fit
        items-center
        justify-center
        "
        >
            <div className="
            gap-2

            grid
            grid-cols-[1fr]
            grid-rows-[repeat(2,_1fr)]
            h-fit
            ">
                <AdministrativeCard 
                    name="Bruno González"
                    charge="Director Creativo"
                    image={brunoGonzalez}
                    >
                </AdministrativeCard>
                <AdministrativeCard 
                    name="Emmanuel Dionet"
                    charge="Director Creativo"
                    image={emmanuelDionet}
                    >
                </AdministrativeCard>
            </div>
            <div className="
            gap-2

            grid
            grid-cols-[1fr]
            grid-rows-[repeat(3,_1fr)]
            ">
                <AdministrativeCard 
                    name="Jack González"
                    charge="Director Creativo"
                    image={jackGonzalez}
                >
                </AdministrativeCard>
                <AdministrativeCard 
                    name="Jess Guarneros"
                    charge="Director Creativo"
                    image={jessGuarneros}
                >
                </AdministrativeCard>
                <AdministrativeCard 
                    name="Danie Pagola"
                    charge="Director Creativo"
                    image={daniePagola}
                >
                </AdministrativeCard>
            </div>
        </div>
    );
}
