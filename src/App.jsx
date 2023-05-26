import "./App.css";
import { MiSegundoComponente } from "./components/MiSegundoComponente/MiSegundoComponente";

function App() {
  //Ejemplo 2
  //const nombreUno = "Luciano";

  //Ejemplo 3 / sirve para explicacion ed desestructuración de datos
  /*   const nombreDos = "Ariel";
  const edad = 25;
  const pais = "Argentina"; */

  /* const propsObjeto = {
    nombreDos,
    edad,
    pais,
  }; */

  //Ejemplos con Desestructuración de datos 3

  const person = {
    name: "Goku",
    age: 27,
  };

  const saludo = "Hola";

  return (
    <>
      <h1>Hola Mundo</h1>
      {/* Ejemplo 1
      <MiSegundoComponente bienvenida="Hola Mundo" /> */}
      {/* Ejemplo 2 
      <MiSegundoComponente nombre={nombreUno} />*/}

      {/* Ejemplo 3 
      <MiSegundoComponente {...propsObjeto} />*/}

      {/* Ejemplos con Desestructuración de datos 1
      <MiSegundoComponente nombre={nombreUno} />*/}
      {/* Ejemplos con Desestructuración de datos 2 
      <MiSegundoComponente {...propsObjeto} />*/}
      {/* Ejemplos con Desestructuración de datos 3 */}
      <MiSegundoComponente person={person} saludo={saludo} />
    </>
  );
}

export default App;
