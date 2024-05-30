import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import SingleContainer from './components/single-container/SingleContainer';
import ItemListContainer from './components/item-list-container/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/equipamiento/:id" element={<SingleContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
