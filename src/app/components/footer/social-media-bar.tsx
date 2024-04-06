import CourierText from "../utils/courier-text";
import SocialMediaIcon from "../utils/social-media-icon/social-media-icon";

export default function() {
    return (
        <div className="
        flex
        flex-col
        bg-black
        items-center
        ">
            <div className="
            flex
            justify-center
            relative
            w-full

            hover:before:w-full
            before:transition-all
            before:absolute
            before:w-1/3
            before:left-1/2
            before:-translate-x-1/2
            before:top-1/2
            before:h-[1px]
            before:bg-white
            ">
                <div className="
                flex
                w-1/3
                px-[1rem]
                py-[1rem]
                justify-evenly
                bg-black
                isolate
                ">
                    <SocialMediaIcon socialMediaType="facebook" />
                    <SocialMediaIcon socialMediaType="instagram" />
                    <SocialMediaIcon socialMediaType="youtube" />
                    <SocialMediaIcon socialMediaType="tiktok" />
                </div>
            </div>

            <CourierText>
                Av. Río Moctezuma no. 43, intersección A con B, San Juan del Río, Querétaro, México.
            </CourierText>
        </div>
    );
}

