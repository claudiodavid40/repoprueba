import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const estaEnCarrito = (id) => {
    return carrito && carrito.some((item) => item.id === id);
  };

  const agregarProducto = (contador, producto, id) => {
    let cartProduct = { producto, contador, id };

    let cartAux = [];

    if (estaEnCarrito(id)) {
      cartProduct = carrito.find((item) => item.id === id);
      cartProduct.contador = cartProduct.contador + contador;

      cartAux = [...cartProduct];
    } else {
      cartAux = [cartProduct, ...carrito];
    }

    setCarrito(cartAux);
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((carri) => carri.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const iconocarrito = () => {
    return carrito.reduce((acum, i) => acum + i.contador, 0);
  };
  const preciototal = () => {
    return carrito.reduce(
      (acum, i) => acum + i.contador * i.producto.precio,
      0
    );
  };

  const valorDelContexto = {
    preciototal,
    iconocarrito,
    carrito: carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    estaEnCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiCustomProvider;



