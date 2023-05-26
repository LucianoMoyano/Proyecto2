import React from "react";

//Ejemplo 1
/* export const MiSegundoComponente = (props) => {
  return (
    <>
      <h1>Soy el segundo componente</h1>
      <h2> {props.bienvenida} </h2>
    </>
  );
}; */

/* 
Ejemplo 2

export const MiSegundoComponente = (props) => {
  return (
    <>
      <h1>Soy el segundo componente</h1>
      <h2>{props.nombre} </h2>
    </>
  );
}; */

/* 
Ejemplo 3

export const MiSegundoComponente = (props) => {
  return (
    <>
      <h1>Soy el segundo componente</h1>
       <h2>Mi nombre es: {props.nombreDos}</h2>
      <h3>Actualmente tengo: {props.edad}</h3>
      <h4>Hoy en día vivo en: {props.pais}</h4> 
    </>
  );
}; */

//Ejemplos con Desestructuración de datos
export const MiSegundoComponente = ({ person, saludo }) => {
  const { name, age } = person;

  return (
    <>
      <h1>Soy el segundo componente</h1>
      {/* Ejemplo 1:  <h2>Hola, {nombre} </h2> */}
      {/* Ejemplo 2: <h2>Mi nombre es: {nombreDos}</h2>
      <h3>Actualmente tengo: {edad}</h3>
      <h4>Hoy en día vivo en: {pais}</h4> */}
      {/* Ejemplo 3 */}
      <div>
        <p>
          {saludo}, {name}
        </p>
        <p>Vos tenes {age} años.</p>
      </div>
    </>
  );
};
