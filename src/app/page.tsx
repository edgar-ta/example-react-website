import portada from "/public/images/portada.png"

import Milestone from "./components/main/milestone";
import Footer from "./components/footer/footer";
import CoverPage from "./components/main/cover-page";
import Menu from "./components/menu/menu";
import Timeline from "./components/main/timeline/timeline";

export default function Home() {
  return (
    <>
      <CoverPage />
      <Timeline />
      <Footer />
    </>
  );
}
