import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <ProductList />
      <Counter />
    </>
  );
}

export default App;
