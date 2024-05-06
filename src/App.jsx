import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Personaje from './components/personaje/Personaje';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="/rogue" element={<h1>Rogues</h1>} />
            <Route path="/guerrero" element={<h1>Guerreros</h1>} />
            <Route path="/barbaro" element={<h1>Bárbaros</h1>} />
            <Route path="/personaje/:id" element={<Personaje />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
