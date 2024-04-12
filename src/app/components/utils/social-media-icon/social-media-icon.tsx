import Image, { StaticImageData } from "next/image";

import facebookLogo from "./facebook-logo.svg"
import instagramLogo from "./instagram-logo.svg"
import youtubeLogo from "./youtube-logo.svg"
import tiktokLogo from "./tiktok-logo.svg"

type SocialMediaType = "facebook" | "instagram" | "youtube" | "tiktok";

const data: { [ key: string ]: StaticImageData } = {
    facebook: facebookLogo,
    instagram: instagramLogo,
    youtube: youtubeLogo,
    tiktok: tiktokLogo
};

export default function(
    props: {
        className?: string,
        socialMediaType: SocialMediaType,
        href?: string
    }
) {

    return (
        <a className="
        aspect-square
        w-[2rem]
        bg-white
        rounded-full
        relative
        overflow-clip
        transition-all
        duration-300
        hover:invert
        hover:ring
        hover:ring-black
        "
        href={props.href}
        >
            <Image
                src={data[props.socialMediaType]}
                alt={`Logo de ${props.socialMediaType}`}
                className="
                max-w-[75%]
                max-h-[75%]
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                "
                />
        </a>
    );
}
