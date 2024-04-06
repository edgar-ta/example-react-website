import CourierLabel from "../../utils/courier-label";
import RosaliaText from "../../utils/rosalia-text";

type ContributorName = "carlos" | "edgar" | "leo" | "uli";

const contributors: { 
    [ key in ContributorName ]: [ fullName: string, position: string, socialMedia: string ] 
} = {
    carlos: [ "Carlos Enrique Villarreal Barrón", "Líder el Equipo", "https://www.facebook.com" ],
    edgar: [ "Edgar Trejo Avila", "Chief Software Engineer", "https://www.facebook.com" ],
    leo: [ "Leonel Soto Alegría", "Software Engineer", "https://www.facebook.com" ],
    uli: [ "Ulises Eduardo López Acosta", "Jefe de Diseño Fullstack", "https://www.facebook.com" ]
};

export default function(props: { contributorName: ContributorName }) {
    const [ fullName, position, socialMedia ] = contributors[props.contributorName];

    return (
        <a className="
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
        p-4
        "
        href={socialMedia}
        >
            <CourierLabel className="">
                { position }
            </CourierLabel>
            <RosaliaText className="">
                { fullName }
            </RosaliaText>
        </a>
    );
}
