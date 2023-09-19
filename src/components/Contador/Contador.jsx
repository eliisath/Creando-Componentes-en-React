import React, { useState } from "react";

//Usaremos useState para saber el valor inicial de nuestro contador
//Y usamos setContador para que react modifique y pueda incrementar y decrementar el valor

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {contador} </p>
      <button onClick={incrementar}> Incrementar </button>
      <button onClick={decrementar}> Decrementar </button>
    </div>
  );
}
export default Contador;
