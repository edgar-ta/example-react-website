import Separator from "./separator/separator";
import SocialMediaBar from "./social-media-bar";
import SpidersSection from "./spiders-section/spiders-section";
import ThbSection from "./thb-section/thb-section";

export default function() {
    return (
        <footer className="
        flex
        flex-col
        ">
            <Separator />
            <SocialMediaBar />
            <ThbSection />
            <SpidersSection />
        </footer>
    );
}
