import React, { useState } from 'react';

function Counter() {
  // initialize state with useState
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px' }}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px' }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
