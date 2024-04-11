import Footer from "../components/footer/footer";
import AcercaDeCoverPage from "./acerca-de-cover-page/acerca-de-cover-page";
import AdministrativeList from "./administrative-list";

export default function() {
    return (
        <>
            <AcercaDeCoverPage />
            <AdministrativeList />
            <Footer />
        </>
    );
}
