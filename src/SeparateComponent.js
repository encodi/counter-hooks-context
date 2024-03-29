import React, { useContext } from "react";
import { CounterContext } from "./Context";

function SeparateComponent() {
  const { state } = useContext(CounterContext);
  return (
    <div>
      <h1>Shared Count: {state.count}</h1>
      <button onClick={() => {}}>Fetch Again</button>
    </div>
  );
}

export default SeparateComponent;
