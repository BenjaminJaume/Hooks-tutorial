import React, { useContext } from "react";
import { InitState } from "./DataFetchingTwo";

function ComponentZero() {
  const state = useContext(InitState);

  return (
    <div>
      {state.loading ? "loading" : JSON.stringify(state.jokes.category)}
      {state.error ? state.error : null}
    </div>
  );
}

export default ComponentZero;
