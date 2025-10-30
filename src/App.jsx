import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/cartContext'
import {exportProductsData, getProducts } from './data/firebase';
import CartContainer from './components/CartContainer/CartContainer';
import app from './data/firebase';

export default function App() {
  console.log('prueba de app', app)
  getProducts();

  return (
    <CartProvider>
      <BrowserRouter>  
        <NavBar />
        {/* PARA EXPORTAR LOS ITEMS A FIRESTORE
        <button onClick={exportProductsData}>
          Export data to file
        </button> */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
          <Route path="/category/:categParam" element={ <ItemListContainer/>} />
          <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>} /> 
          <Route path='/cart' element={<CartContainer/>} />
          <Route path="*"  element={ <h1>404: Página no encontrada</h1>} /> 
        </Routes>
        
    </BrowserRouter>
  </CartProvider> 
  )    
}