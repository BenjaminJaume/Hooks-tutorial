import React, { useReducer, useEffect } from "react";
import axios from "axios";
import ComponentZero from "./ComponentZero";

const initialState = {
  loading: true,
  error: "",
  jokes: {},
};

export const InitState = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        jokes: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        jokes: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/any")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <InitState.Provider value={state}>
      <ComponentZero />
    </InitState.Provider>
  );
}

export default DataFetchingTwo;
