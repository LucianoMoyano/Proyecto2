import react, { useState } from "react";

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
    </>
  );
};
