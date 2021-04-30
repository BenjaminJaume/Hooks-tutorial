import React, { useReducer } from "react";
import "./App.css";
import DataFetchingOne from "./component-fourth/DataFetchingOne";
// import ComponentA from "./components-third/ComponentA";
// import ComponentB from "./components-third/ComponentB";
// import ComponentC from "./components-third/ComponentC";

// export const UserContext = React.createContext();
// export const PasswordContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <div>
          {/* Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC /> */}

          <DataFetchingOne />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
