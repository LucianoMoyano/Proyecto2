import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { ProductList } from "./components/ProductList/ProductList";
import { SegundoComponente } from "./components/MiSegundoComponente/SegundoComponente";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        {/* <h1>Hola Mundo</h1>
        <ProductList />
        <SegundoComponente />
        <Counter /> */}
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}
          <Route path="/" element={<ProductList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/segundo" element={<SegundoComponente />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
