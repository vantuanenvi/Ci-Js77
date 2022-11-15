import {Routes, Route} from 'react-router-dom'

import './App.css';
import Login from "./pages/Login";
import Product from './pages/Product';
import Register from "./pages/Register";
import Products from './pages/Products';
import Invoices from './pages/Invoices';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile'
import Cart from './pages/Cart'
function App() {
  return (
    <div className="app-container"> 
      <Routes>
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/auth/register" element={<Register/>} />
      
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />

      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/invoices' element={<Invoices/>}></Route>
      
      <Route path="/*" element={<NotFound/>} />

      
      </Routes>
    </div>
  );
}

export default App;
