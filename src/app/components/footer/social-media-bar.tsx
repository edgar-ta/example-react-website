import CourierText from "@/app/components/tipography/courier-text";
import SocialMediaIcon from "../utils/social-media-icon/social-media-icon";

export default function() {
    return (
        <div className="
        flex
        justify-center
        relative
        w-full
        bg-black

        before:w-full
        before:h-[0.5px]
        before:bg-opacity-50
        
        md:hover:before:w-full
        md:before:w-1/3
        md:before:h-[1px]
        md:before:bg-opacity-100

        before:transition-all
        before:absolute
        before:left-1/2
        before:-translate-x-1/2
        before:top-1/2
        before:bg-white
        ">
            <div className="
            flex
            w-3/4

            md:w-1/3

            px-[1rem]
            py-[1rem]
            justify-evenly
            bg-black
            isolate
            ">
                <SocialMediaIcon socialMediaType="facebook" href="https://www.facebook.com/profile.php?id=100094593204974&mibextid=ZbWKwL" />
                <SocialMediaIcon socialMediaType="instagram" href="https://www.instagram.com/thehouseofbluesmx?igsh=amN4dTV6dHU1Z3ky" />
                <SocialMediaIcon socialMediaType="tiktok" href="https://www.tiktok.com/@thehouseofbluesmx?_t=8lO358zxL42&_r=1" />
            </div>
        </div>
    );
}

