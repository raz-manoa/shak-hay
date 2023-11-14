import "./globals.scss";
import Accompagnement from "./sections/accompagnement-projets/section.tsx";
import Hero from "./sections/hero/section.tsx";
import Realisation from "./sections/nos-realisations/section.tsx";

function App() {

  return (
    <div>
      <Hero />
      <Accompagnement />
      <Realisation />
    </div>
  );
}

export default App;
