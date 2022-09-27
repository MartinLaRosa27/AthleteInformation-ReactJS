import { Busqueda } from "./components/Busqueda.jsx";
import { Footer } from "./components/Footer.jsx";
import { MostrarInformacion } from "./components/MostrarInformacion.jsx";
import { InformaciónAtletaProvider } from "./context/InformaciónAtletaProvider.jsx";

function App() {
  return (
    <>
      <InformaciónAtletaProvider>
        <header>
          <h1>Athlete Information</h1>
        </header>{" "}
        <Busqueda />
        <MostrarInformacion />
        <Footer />
      </InformaciónAtletaProvider>
    </>
  );
}

export default App;
