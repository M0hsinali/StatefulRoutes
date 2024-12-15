import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
  
    function handleIncrement() {
      setCount(count + 1);
    }

    function handleDecrement() {
        if (count > 0){
            setCount(count - 1);
        }
      
    }
  return (
    <>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}>
      <h1 style={{position: 'absolute', top: '14%'}}>Counter Page</h1>
      <p style={{position: 'absolute', top: '20%'}}>Current Count: {count}</p>
      <button style={{position: 'absolute', top: '25%'}} onClick={handleIncrement}>
        Increment
      </button>
      <button style={{position: 'absolute', top: '29%'}} onClick={handleDecrement}>
         Decrement
      </button>
      </div>
    </>
  );
}