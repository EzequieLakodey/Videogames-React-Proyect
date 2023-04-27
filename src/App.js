// CSS
import "./App.scss";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { CartProvider } from "./contexts/CartContext";

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home/Home";
import ItemsCateogries from "./pages/Categories/ItemsCateogries";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./pages/Cart/Cart";
import OrderForm from "./pages/OrderForm/OrderForm";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/category/:categoryId" element={<ItemsCateogries />} />

            <Route path="/item/:id" element={<ItemDetail />} />

            <Route path="*" />

            <Route path="/cart" element={<Cart />} />

            <Route path="/order" element={<OrderForm />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
