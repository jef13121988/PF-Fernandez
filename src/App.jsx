import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import SingleContainer from './components/single-container/SingleContainer';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import FullItemContainer from './components/full-item-container/FullItemContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<FullItemContainer />} />
            <Route path="/personaje/:id" element={<SingleContainer />} />
            <Route path="/clase/:claseId" element={<ItemListContainer />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
