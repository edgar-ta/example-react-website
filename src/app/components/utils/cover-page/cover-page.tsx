import Image, { StaticImageData } from "next/image";
import Menu from "@/app/components/menu/menu";
import RosaliaTitle from "@/app/components/tipography/rosalia-title";
import { HTMLAttributes } from "react";

export default function(
    props: {
        className?: string,
        image: StaticImageData,
        alt: string,
        children?: Readonly<React.ReactNode>,
        hasMenu?: boolean
    } & HTMLAttributes<HTMLElement>
) {
  const { className, image, alt, children, hasMenu, ...rest } = props;

    return (
        <section className="
        h-screen
        relative
        w-screen
        overflow-hidden
        "
        {...rest}
        >
          <Image src={image} alt={alt}
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          max-w-none
          max-h-none

          hidden
          h-full
          w-auto

          lg:block
          "
          />

          <Image src={image} alt={alt} 
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          max-w-none
          max-h-none

          w-auto
          h-full

          lg:w-full
          lg:h-auto
          "
          />

          {
            hasMenu &&
            <Menu className="
            absolute
            top-0
            "/>
          }

          <div className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          ">
            <RosaliaTitle size="md" className="
            w-max
            text-white
            ">
                {children}
            </RosaliaTitle>
          </div>
        </section>
    );
}


