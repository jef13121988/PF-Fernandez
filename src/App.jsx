import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import EquipoDetailContainer from './components/equipo-detail-container/EquipoDetailContainer';
import EquipoListContainer from './components/equipo-list-container/EquipoListContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<EquipoListContainer />} />
            <Route path="/equipamiento/:id" element={<EquipoDetailContainer />} />
            <Route path="/category/:categoryId" element={<EquipoListContainer />} />
            <Route path="*" element={<h1>La página solicitada no existe</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
