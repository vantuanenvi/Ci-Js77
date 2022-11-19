import { Routes, Route } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import About from "./pages/About"
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="about" element={<About/>}></Route>

        </Route>
        {/* <Route path="/*" element={<NotFound/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
