import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
// import DataFetching from "./components/DataFetching";
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import HookTimer from "./components/HookTimer";

export const UserContext = React.createContext();
export const PasswordContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}

      {/* <HookCounter /> */}

      {/* <HookCounter2 /> */}

      {/* <HookCounter3 /> */}

      {/* <HookCounter4 /> */}

      {/* <HookCounterOne /> */}

      {/* <HookMouse /> */}

      {/* <MouseContainer /> */}

      {/* <HookTimer /> */}

      {/* <DataFetching /> */}

      <UserContext.Provider value={"Hey yo"}>
        <PasswordContext.Provider value={"123456"}>
          <ComponentA />
        </PasswordContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
