import React from "react";
import Canvas from "../Canvas/Canvas";
import ControlPanel from "../ControlPanel/ControlPanel";
import { Provider } from "react-redux";
import { store } from "../../store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ControlPanel />
        <Canvas />
      </Provider>
    </>
  );
}

export default App;
