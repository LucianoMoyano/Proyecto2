//CLASE ESTADOS

/* import { MiSegundoComponente } from "./components/MiSegundoComponente/MiSegundoComponente"; */

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

/*   const person = {
    name: "Goku",
    age: 27,
  };

  const saludo = "Hola"; */

{
  /* Ejemplo 1
      <MiSegundoComponente bienvenida="Hola Mundo" /> */
}
{
  /* Ejemplo 2 
      <MiSegundoComponente nombre={nombreUno} />*/
}

{
  /* Ejemplo 3 
      <MiSegundoComponente {...propsObjeto} />*/
}

{
  /* Ejemplos con Desestructuración de datos 1
      <MiSegundoComponente nombre={nombreUno} />*/
}
{
  /* Ejemplos con Desestructuración de datos 2 
      <MiSegundoComponente {...propsObjeto} />*/
}
{
  /* Ejemplos con Desestructuración de datos 3 */
}
{
  /*  <MiSegundoComponente person={person} saludo={saludo} /> */
}

// LO QUE TENIA LA CARPETA COUNTER

//ejemplo 1

/*  const botonPresionado = () => {
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
  }; */

//-----------------------

/*   <h3>Mis estados</h3>
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
 */
