import portada from "/public/images/portada.png"

import Milestone from "./components/main/milestone";
import Footer from "./components/footer/footer";
import MainCoverPage from "./components/main/main-cover-page";
import Menu from "./components/menu/menu";
import Timeline from "./components/main/timeline/timeline";
import VideoSection from "./components/main/video-section/video-section";

export default function Home() {
  return (
    <>
      <MainCoverPage />
      <Timeline />
      <VideoSection />
      <Footer />
    </>
  );
}
