import Image, { StaticImageData } from "next/image";

import facebookLogo from "./facebook-logo.svg"
import instagramLogo from "./instagram-logo.svg"
import youtubeLogo from "./youtube-logo.svg"
import tiktokLogo from "./tiktok-logo.svg"

type Include<T, U extends T> = U;

type AvailableSocialMedia = "facebook" | "instagram" | "youtube" | "tiktok";
type SupportedSocialMedia = Include<AvailableSocialMedia ,"facebook" | "instagram" | "tiktok">;
type SupportedSocialMediaLogo = `${SupportedSocialMedia}Logo`;

const data: { [ key in SupportedSocialMediaLogo ]: StaticImageData } = {
    facebookLogo,
    instagramLogo,
    tiktokLogo
};

export default function(
    props: {
        className?: string,
        socialMediaType: SupportedSocialMedia,
        href?: string
    }
) {
    const key: SupportedSocialMediaLogo = `${props.socialMediaType}Logo`;

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
                src={data[key]}
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
