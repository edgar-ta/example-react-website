'use client'

import { Squeeze } from "hamburger-react";
import ThbLogo from "@/app/components/utils/thb-logo/thb-logo";

import Link from "next/link";
import MenuTab from "./menu-tab";
import { useState } from "react";

export default function() {
    const [ isOpen, setOpen ] = useState(false);

    return (
        <nav className="
        flex
        justify-center
        items-center
        z-10
        
        px-4
        h-16
        top-0
        w-full
        fixed
        bg-white
        border-b
        border-b-black

        md:border-b-0
        
        md:bg-transparent
        md:h-32
        md:mix-blend-difference
        ">
            <div className="
            flex
            md:hidden
            z-20
            text-white
            mix-blend-difference
            absolute
            left-4
            ">
                <Squeeze onToggle={(value) => setOpen(value)} />
            </div>
            <ThbLogo className="h-3/4 mix-blend-difference z-10" style="white" />
            <ul data-is-open={isOpen} className={`
            flex
            absolute
            top-0

            transition-all
            ease-in-out
            duration-500
            [&[data-is-open="true"]]:right-0
            [&[data-is-open="true"]]:bg-opacity-100
            [&[data-is-open="false"]]:right-full
            [&[data-is-open="false"]]:bg-opacity-0
            
            bg-black
            w-full
            flex-col
            h-screen
            justify-center
            items-center
            
            md:transition-none
            md:flex-row
            md:w-fit
            md:h-full
            md:[right:_0_!important]
            `}>
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

