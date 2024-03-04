/*import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>El valor actual es: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Counter;*/

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
    <div>
      <h2>Contador</h2>
      <p>El valor actual es: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default Counter;
