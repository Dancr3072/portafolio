import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Presentacion from "./pages/Presentacion";
import Experiencia from "./pages/Experiencia";
import Contacto from "./pages/Contacto";
import Envio from "./pages/envio";
import Consumo from "./pages/Consumo";
import Episodio from "./pages/Episodio";
import"./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Header visible en TODAS las páginas */}
      <Header />

      <main>
        <Routes>
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/envio" element={<Envio />} />
          <Route path="/consumo" element={<Consumo/>}/>
          <Route path="/episodio" element={<Episodio/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;