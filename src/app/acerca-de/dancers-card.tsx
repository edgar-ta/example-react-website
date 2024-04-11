import RosaliaText from "../components/tipography/rosalia-text";

export default function(
    props: {
        name: string,
        lastName?: string
    }
) {
    return (
        <div className="
        flex
        flex-col
        px-12
        py-8
        border-t
        border-t-black
        ">
            <RosaliaText 
                size="lg"
                className="text-center"
                >
                {props.name}
            </RosaliaText>
            <RosaliaText 
                size="md"
                className="text-center"
                >
                {props.lastName}
            </RosaliaText>
        </div>
    );
}
