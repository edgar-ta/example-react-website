import ThbLogo from "@/app/components/utils/thb-logo/thb-logo";

import Link from "next/link";
import MenuTab from "./menu-tab";

export default function() {
    return (
        <nav className="
        flex
        justify-center
        items-center
        z-10
        
        h-16
        top-0
        sticky
        
        md:fixed
        md:w-full
        md:h-32
        md:mix-blend-difference
        ">
            <ThbLogo className="h-3/4 mix-blend-difference" style="white" />
            <ul className="
            flex
            absolute
            top-0
            
            bg-black
            w-full
            flex-col
            h-screen
            justify-center
            items-center
            
            md:flex-row
            md:w-fit
            md:h-full
            md:right-0
            ">
                <MenuTab href="/">
                    House
                </MenuTab>
                <MenuTab href="/merch">
                    Merch
                </MenuTab>
                <MenuTab href="/acerca-de">
                    Acerca de
                </MenuTab>
            </ul>
        </nav>
    );
}

