import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [counters, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>1 Count {counters.firstCounter}</div>
      <div>2 Count {counters.secondCounter}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          1 Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          1 Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 5 });
          }}
        >
          1 Increment 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 5 });
          }}
        >
          1 Decrement 5
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          2 Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          2 Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 5 });
          }}
        >
          2 Increment 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 5 });
          }}
        >
          2 Decrement 5
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "reset", value: 1 });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
