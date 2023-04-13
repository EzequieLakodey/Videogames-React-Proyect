// CSS
import "./App.css";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CONTEXT
import { cartProvider } from "./contexts/CartContext";

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";

//PAGES
import Home from "./pages/Home/Home";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemsDetailsContainer from "./components/ItemsDetailsContainer/ItemsDetailsContainer";

function App() {
  return (
    <Router>
      <cartProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/category/:categoryId"
              element={<ItemsListContainer />}
            />

            <Route path="/item/:id" element={<ItemsDetailsContainer />} />

            <Route path="*" />
          </Routes>
        </div>
      </cartProvider>
    </Router>
  );
}

export default App;
