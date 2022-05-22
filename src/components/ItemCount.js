import React from "react";
import { useState } from "react";

// import ItemsList from './Components/ItemsList'

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);


  const clickbotonsuma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const clickbotonresta = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const okcompra = () => {
    onAdd(contador);
  };
  return (
    <>
      <div className="producto">
        <div className="contador">
          <button onClick={clickbotonsuma}>+</button>
          <p>{contador}</p>
          <button onClick={clickbotonresta}>-</button>
        </div>
        <button onClick={okcompra}>agregar al carrito</button>
      </div>
    </>
  );
};
export default ItemCount;
