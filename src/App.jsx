import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import EquipoListContainer from './components/equipo-list-container/EquipoListContainer';
import EquipoDetailContainer from './components/equipo-detail-container/EquipoDetailContainer';
import CheckoutContainer from './components/checkout-container/CheckoutContainer';
import CartProvider from './contexts/CartProvider';
import CartContainer from './components/cart-container/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
              <Route path="/" element={<EquipoListContainer />} />
              <Route path="/category/:categoryId" element={<EquipoListContainer />} />
              <Route path="/category/subcategory/:subcategoryId" element={<EquipoListContainer />} />
              <Route path="/equipamiento/:id" element={<EquipoDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route path="*" element={<h1>La página solicitada no existe</h1>} />
            </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
