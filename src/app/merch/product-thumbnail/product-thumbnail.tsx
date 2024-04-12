import Image, { StaticImageData } from "next/image";

import RosaliaText from "@/app/components/tipography/rosalia-text";

import orangeSweater from "./sweater--orange.png";
import whiteSweater from "./sweater--white.png";
import shoppingCart from "./shopping-cart.svg";
import ProductActionTab from "./product-action-tab";

type SweaterColor = "orange" | "white";

function formatCurrency(value: number) {
    const fractionalPart = value % 1;
    const integerPart = Math.floor(value);

    const basicIntegerRepresentation = integerPart.toString();
    const components = [];
    for (let i = basicIntegerRepresentation.length; i > 0; i -= 3) {
        const component = basicIntegerRepresentation.substring(Math.max(i - 3, 0), i);
        components.unshift(component);
    }

    const extendedIntegerRepresentation = components.join(",");

    const fractionalPartMultiplied = fractionalPart * 100;
    const fractionalRepresentation = fractionalPartMultiplied < 10 
        ?   "0" + fractionalPartMultiplied.toString() 
        : Math.floor(fractionalPart * 100).toString();

    return extendedIntegerRepresentation + "." + fractionalRepresentation;
}

const data: {
    [ key in SweaterColor ]: {
        image: StaticImageData,
        name: string
    }
} = {
    orange: {
        image: orangeSweater,
        name: "Sweater naranja"
    },
    white: {
        image: whiteSweater,
        name: "Sweater blanco"
    },
};

export default function(
    props: {
        width: "thin" | "wide",
        height: "short" | "tall",
        color: SweaterColor,
        price: number,
        className?: string
    }
) {
    const { image, name } = data[props.color];

    return (
        <div 
        data-width={props.width}
        data-height={props.height}

        className={`
        [&[data-width='thin']]:col-span-1
        [&[data-width='wide']]:col-span-2

        [&[data-height='short']]:row-span-1
        [&[data-height='tall']]:row-span-2

        flex
        flex-col

        w-full
        h-full

        border
        border-black

        group

        ${props.className}
        `}>
            <div className="
            w-full
            bg-white
            relative

            group-[&[data-width='thin'][data-height='short']]:aspect-square
            group-[&[data-width='wide'][data-height='tall']]:aspect-square
            flex-grow
            ">
                <Image 
                    src={image}
                    alt={`Concepto de mercancía; "${name}"`}
                    className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    h-4/5
                    w-auto
                    overflow-hidden
                    "
                    />
            </div>
            <div className="
            w-full
            h-16

            grid
            grid-cols-[repeat(3,_1fr)]
            bg-black
            divide-x
            divide-x-white
            place-items-center

            px-4
            py-2
            ">
                <ProductActionTab>
                    <RosaliaText 
                        size="sm"
                        className="
                        text-center
                        text-white
                        "
                        >
                        {name}
                    </RosaliaText>
                </ProductActionTab>
                <ProductActionTab>
                    <RosaliaText 
                        size="sm"
                        className="
                        text-center
                        text-white
                        "
                        >
                        ${ formatCurrency(props.price) }
                    </RosaliaText>
                </ProductActionTab>
                <ProductActionTab>
                    <Image 
                        src={shoppingCart}
                        alt="Ícono de carrito de compras"
                        className="
                        aspect-square
                        h-1/3
                        "
                        />
                </ProductActionTab>
            </div>
        </div>
    );
}

