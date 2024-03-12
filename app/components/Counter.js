'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <strong><h2 className="text-center text-pink-500">CONTADOR</h2></strong>
        <p className="text-center text-pink-500">Número: - {count} -</p>
        <button onClick={increment} className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Incrementar</button>
        <button onClick={reset} className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Reiniciar</button>
      </div>
    </div>
  );
};

export default Counter;
