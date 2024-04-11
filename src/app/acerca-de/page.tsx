import Footer from "../components/footer/footer";
import AcercaDeCoverPage from "./acerca-de-cover-page/acerca-de-cover-page";
import AcercaDeSubcoverPage from "./acerca-de-subcover-page/acerca-de-subcover-page";
import AdministrativeList from "./administratives-list";
import DancersList from "./dancers-list";

export default function() {
    return (
        <>
            <AcercaDeCoverPage />
            <AdministrativeList />
            <AcercaDeSubcoverPage />
            <DancersList />
            <Footer />
        </>
    );
}
