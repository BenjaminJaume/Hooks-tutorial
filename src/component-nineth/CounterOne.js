import React from "react";
import useCounter from "./Hooks/useCounter";

const params = {
  initialCount: 15,
  value: 150,
};

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(params);

  return (
    <div>
      <h2>Count1 - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
