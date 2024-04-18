import AdministrativeCard from "./administratives-card";

import brunoGonzalez from "./images/bruno-gonzalez.jpg";
import emmanuelDionet from "./images/emmanuel-dionet.jpg"
import jackGonzalez from "./images/jack-gonzalez.jpeg"
import jessGuarneros from "./images/jess-guarneros.jpg"
import daniePagola from "./images/danie-pagola.jpg"

export default function() {

    return (
        <section className="
        gap-4
        px-4

        flex
        flex-col
        w-full

        sm:grid
        sm:grid-cols-[repeat(2,_1fr)]
        sm:grid-cols[1fr]
        sm:grid-rows-[1fr]

        py-12
        xs:py-16
        sm:py-24
        md:py-32
        lg:py-40
        h-fit
        items-center
        justify-center
        "
        >
            <div className="
            gap-4

            grid
            grid-cols-[1fr]
            grid-rows-[repeat(2,_1fr)]
            w-full
            h-fit
            ">
                <AdministrativeCard 
                    name="Bruno González"
                    charge="Director Creativo"
                    image={brunoGonzalez}
                    socialMedia="https://www.instagram.com/brunogzgr/"
                    />
                <AdministrativeCard 
                    name="Emmanuel Dionet"
                    charge="Director Creativo"
                    image={emmanuelDionet}
                    socialMedia="https://www.instagram.com/thelifeofdionet/"
                    />
            </div>
            <div className="
            gap-4

            grid
            grid-cols-[1fr]
            grid-rows-[repeat(3,_1fr)]
            w-full
            ">
                <AdministrativeCard 
                    name="Jack González"
                    charge="CEO"
                    image={jackGonzalez}
                    socialMedia="https://www.instagram.com/jackgonzalezmx/"
                />
                <AdministrativeCard 
                    name="Jess Guarneros"
                    charge="Director Creativo"
                    image={jessGuarneros}
                    socialMedia="https://www.instagram.com/heyjessjiimenez/"
                />
                <AdministrativeCard 
                    name="Danie Pagola"
                    charge="Director Creativo"
                    image={daniePagola}
                    socialMedia="https://www.instagram.com/daniepagola/"
                />
            </div>
        </section>
    );
}
