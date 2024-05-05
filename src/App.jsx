import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="/coso" element={<h1>Sección de coso</h1>} />
            <Route path="/lista" element={<h1>Listado</h1>} />
            <Route path="/elemento/:id" element={<h1>Elemento</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
