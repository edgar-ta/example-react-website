import HorizontalPadding from "../components/utils/horizontal-padding";
import ProductThumbnail from "./product-thumbnail/product-thumbnail";

export default function(
    props: {
        className?: string
    }
) {
    return (
        <HorizontalPadding className={`
        py-32

        grid
        grid-cols-[repeat(2,_1fr)]
        lg:grid-cols-[repeat(3,_1fr)]

        gap-4

        ${props.className}
        `}>
            <ProductThumbnail 
                height="short"
                width="thin"
                color="orange"
                price={250}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="white"
                price={500}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="white"
                price={400}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="orange"
                price={400}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="orange"
                price={250}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="white"
                price={500}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="white"
                price={400}
            />
            <ProductThumbnail 
                height="short"
                width="thin"
                color="orange"
                price={400}
            />
        </HorizontalPadding>
    );
}


