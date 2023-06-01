import React, { useState, useEffect } from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import "./ProductList.css";

export const ProductList = () => {
  //establecer 2 estados
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  //DECLARACIÓN DE HOOK USEEFFECT
  useEffect(() => {
    setLoading(true);
    pedirProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("tenes un erorr", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando..</p>
      ) : (
        <div className="card">
          {items.map((item) => (
            <h4 key={item.id}>
              <img src={item.photo} alt={item.photo} />
              <p>{item.name}</p>
              <p>{item.description}</p>
            </h4>
          ))}
        </div>
      )}
    </div>
  );
};
