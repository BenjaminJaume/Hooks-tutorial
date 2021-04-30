import React from "react";
import useCounter from "./Hooks/useCounter";

const params = {
  initialCount: 5,
  value: 20,
};

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(params);

  return (
    <div>
      <h2>Count2 - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
