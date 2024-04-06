import Image, { StaticImageData } from "next/image";

import facebookLogo from "./facebook-logo.svg"
import instagramLogo from "./instagram-logo.svg"
import youtubeLogo from "./youtube-logo.svg"
import tiktokLogo from "./tiktok-logo.svg"

type SocialMediaType = "facebook" | "instagram" | "youtube" | "tiktok";

interface SocialMediaIconProps {
    socialMediaType: SocialMediaType
}

const data: { [ key in SocialMediaType ]: [ string, StaticImageData ] } = {
    facebook: [ "https://www.facebook.com", facebookLogo ],
    instagram: [ "https://www.instagram.com", instagramLogo ],
    youtube: [ "https://www.youtube.com", youtubeLogo ],
    tiktok: [ "https://www.tiktok.com", tiktokLogo ],
};

export default function(props: SocialMediaIconProps) {
    const [ link, logoData ] = data[props.socialMediaType];

    return (
        <a className="
        aspect-square
        w-[2rem]
        bg-white
        rounded-full
        relative
        overflow-clip
        "
        href={link}
        >
            <Image
                src={logoData}
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
