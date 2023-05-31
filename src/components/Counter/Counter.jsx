import react, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";

export const Counter = () => {
  //ejemplo 1

  const botonPresionado = () => {
    console.log("estas son las veces que el boton fue apretado");
  };

  //Ejemplo 2 - renderizando nuevos estados

  const [hora, setHora] = useState("");

  const mostrarHoras = () => {
    const date = new Date();
    const horaLocal = date.toLocaleTimeString();
    setHora(horaLocal);
  };

  //Ejemplo 3 - Dark Mode

  const [isWhite, setIsWhite] = useState(true);
  const [isBlack, setIsBlack] = useState(false);

  const handleWhite = () => {
    setIsWhite(true);
    setIsBlack(false);
  };

  const handleBlack = () => {
    setIsBlack(true);
    setIsWhite(false);
  };

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
      <h3>Mis estados</h3>
      <hr />
      <button onClick={botonPresionado}>Apretame y mira la consola</button>
      <hr />
      <p>{hora}</p>
      <button onClick={mostrarHoras}>Mostrar hora</button>
      <hr />
      <div
        style={{
          //ternario para darkmode
          backgroundColor: isWhite ? "white" : "black",
          color: isBlack ? "white" : "black",
        }}
      >
        <h2>Color cambiante</h2>
        <button onClick={handleWhite}>Blanco</button>
        <button onClick={handleBlack}>Negro</button>
      </div>
      <hr />

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
