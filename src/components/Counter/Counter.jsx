import react, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";

export const Counter = () => {
  //Counter

  const [counter, setCounter] = useState(0);

  const [max, setMax] = useState(10); //de esta forma el valor maximo de produtos son 10 y nos muestra el alerta de "Sin stock"

  const handleAdd = () => {
    if (counter == max) {
      alert("Sin stock");
      counter(0);
    }
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={handleAdd}>
        <BsFillCartPlusFill />
      </button>
      <button onClick={handleRemove}>
        <BsFillCartDashFill />
      </button>
    </>
  );
};
