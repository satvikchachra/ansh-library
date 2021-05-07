import "./styles.css";
import { navbarLinksList, navbarButtonWithLinksList } from "./Components/data";
import { CgComponents } from "react-icons/cg";
import Navbar from "./Components/Navigation/Navbar";
import AvatarsSection from "./Components/Pages/HomePage/AvatarsSection/AvatarsSection";
import ImagesSection from "./Components/Pages/HomePage/ImagesSection/ImagesSection";
import AlertsSection from "./Components/Pages/HomePage/AlertsSection/AlertsSection";
import ToastsSection from "./Components/Pages/HomePage/ToastsSection/ToastsSection";
import ButtonsSection from "./Components/Pages/HomePage/ButtonsSection/ButtonsSection";
import CardsSection from "./Components/Pages/HomePage/CardsSection/CardsSection";
import InputsSection from "./Components/Pages/HomePage/InputsSection/InputsSection";
import ModalsSection from "./Components/Pages/HomePage/ModalsSection/ModalsSection";
import Grid2Section from "./Components/Pages/HomePage/Grid2Section/Grid2Section";
import Grid3Section from "./Components/Pages/HomePage/Grid3Section/Grid3Section";

export default function App() {
  return (
    <div className="App">
      <Navbar
        brandLogo={<CgComponents />}
        brandName="Ansh"
        navLinksList={navbarLinksList}
        navBtnLinksList={navbarButtonWithLinksList}
      />

      <div className="App-Content">
        <AvatarsSection />
        <ImagesSection />
        <ToastsSection />
        <ButtonsSection />
        <CardsSection />
        <InputsSection />
        <ModalsSection />
        <AlertsSection />
        <Grid2Section />
        <Grid3Section />
      </div>
    </div>
  );
}
