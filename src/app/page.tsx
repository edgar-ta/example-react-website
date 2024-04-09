import portada from "/public/images/portada.png"

import Milestone from "./components/main/milestone";
import Footer from "./components/footer/footer";
import CoverPage from "./components/main/cover-page";
import Menu from "./components/menu/menu";

export default function Home() {
  return (
    <>
      <Menu />
      <CoverPage />
      <section className="bg-white">
        <Milestone 
          year={2022}
          month="dec"
          imageOrientation="right"
          image={portada}
          alt="Something"
          description="In the old year of 2022, something happened"
          />
      </section>
      <Footer />
    </>
  );
}
