import CourierLabel from "../../tipography/courier-label";
import RosaliaText from "@/app/components/tipography/rosalia-text";

type ContributorName = "carlos" | "edgar" | "leo" | "uli";

const contributors: { 
    [ key in ContributorName ]: [ fullName: string, position: string, socialMedia: string ] 
} = {
    carlos: [ 
        "Carlos Enrique Villarreal Barrón", 
        "Líder el Equipo", 
        "https://www.instagram.com/enriquevilla_18?igsh=MXI1ZmU4eXlweXNoOQ==" 
    ],
    edgar: [ 
        "Edgar Trejo Avila", 
        "Chief Software Engineer", 
        "https://www.instagram.com/__edgar_ta__/" 
    ],
    leo: [ 
        "Leonel Soto Alegría", 
        "Software Engineer", 
        "https://www.instagram.com/leonel_st.png/" 
    ],
    uli: [ 
        "Ulises Eduardo López Acosta", 
        "Jefe de Diseño Fullstack", 
        "https://www.instagram.com/dangerous_michi?igsh=MThhc3JpMGl5cjdiZA==" 
    ]
};

export default function(
    props: { 
        contributorName: ContributorName,
        className?: string
    }
) {
    const [ fullName, position, socialMedia ] = contributors[props.contributorName];

    return (
        <a className={
        `
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
        p-4
        ${props.className}
        `}
        href={socialMedia}
        target="_blank"
        >
            <CourierLabel 
                size="md"
                className="
                text-center
                text-black
                "
                >
                { position }
            </CourierLabel>
            <RosaliaText 
                size="md"
                className="
                text-center
                text-black
                "
                >
                { fullName }
            </RosaliaText>
        </a>
    );
}
