import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad_total, setCantidad_total] = useState(0);
  const [precio_total, setPrecio_total] = useState(0);

  const estaEnCarrito = (id) => {
    return carrito && carrito.some((item) => item.id === id);
  };

  const agregarProducto = (contador, producto, id) => {
    let cartProduct = { producto, contador, id };

    let cartAux = [];

    if (estaEnCarrito(id)) {
      cartProduct = carrito.find((item) => item.id === +id);

      cartProduct.contador = cartProduct.contador + contador;

      cartAux = [...cartProduct];
    } else {
      cartAux = [cartProduct, ...carrito];
    }

    setCarrito(cartAux);
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((carri) => carri.id !== id));
    console.log("eliminado");
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const valorDelContexto = {
    cantidad_total: cantidad_total,
    precio_total: precio_total,
    carrito: carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    estaEnCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiCustomProvider;
