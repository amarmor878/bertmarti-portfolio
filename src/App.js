import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import Proyecto from "./pages/Proyecto.jsx";
import Experiencia from "./pages/Experiencia.jsx";
import BarraNavegacion from "./components/BarraNavegacion.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/projects" element={<Proyectos />} />
          <Route path="/project/:id" element={<Proyecto />} />
          <Route path="/experience" element={<Experiencia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
