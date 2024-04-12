import Footer from "../components/footer/footer";
import MerchCoverPage from "./merch-cover-page/merch-cover-page";
import ProductDashboard from "./product-dashboard";

export default function() {
    return (
        <>
            <MerchCoverPage />
            <ProductDashboard />
            <Footer />
        </>
    );
}
