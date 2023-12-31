import "./globals.scss";
import Accompagnement from "./sections/accompagnement-projets/section.tsx";
import Footer from "./sections/footer/Footer.tsx";
import Hero from "./sections/hero/section.tsx";
import Realisation from "./sections/nos-realisations/section.tsx";
import ParlantProjets from "./sections/parlant-projets/section.tsx";
import Techno from "./sections/techno/section.tsx";

function App() {

  return (
    <div>
      <Hero />
      <Accompagnement />
      <Realisation />
      <Techno />
      <ParlantProjets />
      <Footer />
    </div>
  );
}

export default App;
