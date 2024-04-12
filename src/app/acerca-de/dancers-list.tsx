import HorizontalPadding from "../components/utils/horizontal-padding";
import DancersCard from "./dancers-card";

export default function() {
    return (
        <HorizontalPadding className="
        py-8
        lg:py-32

        flex
        flex-col
        items-center
        justify-center
        ">
            <div className="
            flex
            flex-wrap
            justify-center
            ">
                <DancersCard 
                    name="Paloma"
                    lastName="Sánchez"
                    />
                <DancersCard 
                    name="Erick"
                    lastName="Hernández"
                    />
                <DancersCard 
                    name="Ángel"
                    lastName="González"
                    />
                <DancersCard 
                    name="Salma"
                    lastName="Fajardo"
                    />
                <DancersCard 
                    name="Zuly"
                    lastName="Mendoza"
                    />
                <DancersCard 
                    name="Zuriel"
                    lastName="Gaytán"
                    />
                <DancersCard 
                    name="Ulises"
                    lastName="Acosta"
                    />
                <DancersCard 
                    name="Wendy"
                    lastName="Paz"
                    />
            </div>
            <div className="
            flex
            flex-wrap
            justify-center
            ">
                <DancersCard 
                    name="Luis Ángel"
                    />
                <DancersCard 
                    name="Emmanuel"
                    />
                <DancersCard 
                    name="Arantza"
                    />
                <DancersCard 
                    name="Antonio"
                    />
                <DancersCard 
                    name="Sofía"
                    />
                <DancersCard 
                    name="Ivana"
                    />
                <DancersCard 
                    name="Karen"
                    />
                <DancersCard 
                    name="Aylin"
                    />
                <DancersCard 
                    name="Naya"
                    />
            </div>
        </HorizontalPadding>
    );
}
